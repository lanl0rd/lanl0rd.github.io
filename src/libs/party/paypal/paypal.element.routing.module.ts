import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PartyPaypalElement } from './paypal.element'

const routes: Routes = [
    {
        path: '',
        component: PartyPaypalElement
    }
]

@NgModule
({
  imports:
  [
    RouterModule.forChild(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class PartyPaypalElementRoutingModule
{

}
