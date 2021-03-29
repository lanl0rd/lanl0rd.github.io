import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PartyPaypalElementRoutingModule } from './paypal.element.routing.module'
import { PartyPaypalElement } from './paypal.element'

import { CommonRouterElementModule } from '../../common/router/router.element.module'


@NgModule
({
  declarations:
  [
    PartyPaypalElement
  ],
  imports:
  [
    CommonModule,
    PartyPaypalElementRoutingModule,
    CommonRouterElementModule
  ]
})
export class PartyPaypalElementModule
{

}
