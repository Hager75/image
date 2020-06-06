<?php

namespace App\Http\Controllers\API\product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File; 
use Yajra\DataTables\DataTables ; 
use App\Product;
use App\User;
use App\Category;

class ProductController extends Controller
{
    
    public function index()
    {
        // return ProductResource::collection(
        //     Product::all()
          //    Product::paginate(5)
        //  );

        return Product::all();
   

    }


//     function create () {
//         $users=User::all();
//         $categories=Category::all();
//         return view('products.create',[
//             'users' => $users,
//             'categories' => $categories,
//         ]);
//         }   
             
    public function store(Request $request) {
        $request['user_id']= 1;
        $request['category_id']=1;
        // if ($request->hasFile('image'))
        // {
        // $file      = $request->file('image');
        // $filename  = $file->getClientOriginalName();
        // $extension = $file->getClientOriginalExtension();
        // $picture   = date('His').'-'.$filename;
        // $file->move(public_path('image'), $picture);
       
   

        if($request->hasFile('image'))
        {$request['image']=Storage::disk('local')->put('images',$request->image);}
        // {
            // $file = $request->file('image');
            // $extension = $file->getClientOriginalExtension();
            // $filename = time().'.'.$extension;
            // Storage::disk('public')->put('images/'.$filename, File::get($file));
            // }
            // $request->img=$filename; 
            ////////////////////////////////////////////////////////
            // $file = $request->file('image');
            // $filename = $file->getClientOriginalName();
            // $extension = $file->getClientOriginalExtension();
            // $picture = date('His').'-'.$filename;
            // $file->move(public_path('img'), $picture); }

        $product=Product::create($request->all());
        // return $product ;
        // return response()->json($product, 201); 
        return $product;
      
    }     

public function show($id)
{
    return new ProductResource(
        Product::find($id)
    );

}

public function edit()
{ 
  $request=request();
 $product_id=$request->product;
 $product= Product::find($product_id); 
return $product;
 }


public function update(Request $request, $id)
{
    if($request->image){
        Storage::disk('local')->delete($request->image);
        $request['image']=Storage::disk('local')->put('images',$request->image);
    }else{
        $request['image']=$request->image;
    }
 $product= Product::findOrFail($id); 
  $product->update($request->all());
   return $product->fresh();
}

public function destroy($id)
   { 
   
    $product= Product::find($id); 
if(!$product){
    return json_encode(array("ERROR"=>"faild to delete this product"));
 }
 else{
    Storage::disk('public')->delete($product->image);
    $product->delete(); 
    return json_encode(array("msg"=>"this product deleted sussecfully"));
}
   
    }


}

