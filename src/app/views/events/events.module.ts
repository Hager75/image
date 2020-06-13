import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventShowComponent } from './event-show/event-show.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [EventsListComponent, EventAddComponent, EventEditComponent, EventShowComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EventsModule { }
