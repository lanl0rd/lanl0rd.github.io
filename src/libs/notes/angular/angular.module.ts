import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotesAngularRoutingModule } from './angular.routing.module'
import { NotesAngularComponent } from './angular.component'

import { CommonRouterElementModule } from '../../common/router/router.element.module'


@NgModule
({
  declarations:
  [
    NotesAngularComponent
  ],
  imports:
  [
    CommonModule,
    NotesAngularRoutingModule,
    CommonRouterElementModule
  ]
})
export class NotesAngularModule
{

}
