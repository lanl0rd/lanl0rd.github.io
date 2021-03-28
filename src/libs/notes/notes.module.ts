import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotesRoutingModule } from './notes.routing.module'
import { NotesComponent } from './notes.component'

import { CommonRouterElementModule } from '../common/router/router.element.module'

@NgModule
({
  declarations:
  [
    NotesComponent
  ],
  imports:
  [
    CommonModule,
    NotesRoutingModule,
    CommonRouterElementModule
  ]
})
export class NotesModule
{
    
}
