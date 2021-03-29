import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PartyStripeElementRoutingModule } from './stripe.element.routing.module'
import { PartyStripeElement } from './stripe.element'

import { CommonRouterElementModule } from '../../common/router/router.element.module'


@NgModule
({
  declarations:
  [
    PartyStripeElement
  ],
  imports:
  [
    CommonModule,
    PartyStripeElementRoutingModule,
    CommonRouterElementModule
  ]
})
export class PartyStripeElementModule
{

}
