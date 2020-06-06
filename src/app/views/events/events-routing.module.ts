import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventShowComponent } from './event-show/event-show.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import {EventAddComponent } from './event-add/event-add.component';


const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: 'show/:id',
    component:EventShowComponent
  },
  {
    path: 'edit/:id',
    component: EventEditComponent
  },
  {
    path: 'add',
    component: EventAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
