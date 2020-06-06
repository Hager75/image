import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./../../../shared/services/products.service";
import { ToastrService } from 'ngx-toastr';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  items: any = [];
  constructor(private productsService: ProductsService,
    private toastr: ToastrService,
    private modelService: NgbModal) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    console.log("getAllComponent");
    
    this.productsService.getAll().subscribe(res =>{
     console.log(res);
    this.items = res;

    });
  }
  deleteItem(model,id){
    this.modelService.open(model).result.then(result => {
      this.productsService.delete(id).subscribe(res => {
        this.toastr.success('this product was deleted successfully', 'success', {timeOut:3000, closeButton: true, progressBar: true});
        console.log(res);
        
        this.getAll();
    },
    err => {
      this.toastr.error(err.statusText, 'Error!', {timeOut:3000, closeButton: true, progressBar: true});
      console.log(err);
      
      
      }
     );
      },
    reason => {
      console.log(reason);
    });
    }
}
