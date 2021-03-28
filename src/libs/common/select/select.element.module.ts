import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonSelectElement } from './select.element'


@NgModule
({
  declarations:
  [
    CommonSelectElement
  ],
  imports:
  [
    CommonModule
  ],
  exports:
  [
    CommonSelectElement
  ]
})
export class CommonSelectElementModule
{

}
