import { Component } from '@angular/core'

import { CommonRouterService } from './router.service'

@Component
({
  selector: 'common-router-element',
  templateUrl: './router.element.html',
  styleUrls: ['./router.element.scss']
})
export class CommonRouterElement
{

    constructor
    (
        public srv: CommonRouterService
    )
    {

    }

}
