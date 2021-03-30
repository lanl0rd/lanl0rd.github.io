import { Directive, ViewContainerRef } from '@angular/core';

@Directive
({
    selector: '[routerHost]'
})
export class CommonRouterDirective
{
    constructor
    (
        public viewContainerRef: ViewContainerRef
    )
    {

    }
}