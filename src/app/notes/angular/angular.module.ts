import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotesAngularRoutingModule } from './angular.routing.module'
import { NotesAngularComponent } from './angular.component'


@NgModule
({
  declarations:
  [
    NotesAngularComponent
  ],
  imports:
  [
    CommonModule,
    NotesAngularRoutingModule
  ]
})
export class NotesAngularModule
{

}
