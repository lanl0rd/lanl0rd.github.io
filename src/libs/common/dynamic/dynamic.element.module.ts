import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonDynamicElement } from './dynamic.element.ng'
import { CommonDynamicDirective } from './dynamic.directive.ng'

@NgModule
({
    imports: 
    [
        CommonModule
    ],
     declarations: 
    [
        CommonDynamicElement,
        CommonDynamicDirective
    ],
    exports: 
    [
        CommonDynamicElement,
        CommonDynamicDirective
    ],
    providers: 
    [

    ]
}) 
export class CommonDynamicElementModule
{
    
}