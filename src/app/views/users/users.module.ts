import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [UserListComponent, UserCreateComponent, UserEditComponent,],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhvcX3mAnbsJYflpvXfhbcl3GadsdRBSI'
    })
  ]
})
export class UsersModule { }
