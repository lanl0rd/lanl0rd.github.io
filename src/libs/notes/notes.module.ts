import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotesRoutingModule } from './notes.routing.module'
import { NotesComponent } from './notes.component'

import { CommonRouterElementModule } from '../common/router/router.element.module'

import { NotesTxtComponentModule } from './txt/txt.component.module'

@NgModule
({
  declarations:
  [
    NotesComponent
  ],
  imports:
  [
    CommonModule,
    CommonRouterElementModule,
    NotesRoutingModule,
    NotesTxtComponentModule
  ]
})
export class NotesModule
{
    
}
