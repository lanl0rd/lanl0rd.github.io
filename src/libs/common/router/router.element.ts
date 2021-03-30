import { Component, ViewChild } from '@angular/core'

import { CommonRouterService } from './router.service'
import { CommonRouterDirective } from './router.directive'

@Component
({
  selector: 'common-router-element',
  templateUrl: './router.element.html',
  styleUrls: ['./router.element.scss']
})
export class CommonRouterElement
{

    // @ViewChild(CommonRouterDirective, {static: true}) host: CommonRouterDirective

    constructor
    (
        public srv: CommonRouterService
    )
    {

    }

    // ngOnInit
    // (
    // )
    // {
    //     this.srv.host = this.host
    // }

}
