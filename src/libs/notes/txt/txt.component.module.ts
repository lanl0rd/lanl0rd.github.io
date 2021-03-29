import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { NotesTxtComponent } from './txt.component'


@NgModule
({
  declarations:
  [
    NotesTxtComponent
  ],
  imports:
  [
    CommonModule,
    FormsModule
  ],
  exports:
  [
    NotesTxtComponent
  ]
})
export class NotesTxtComponentModule
{

}
