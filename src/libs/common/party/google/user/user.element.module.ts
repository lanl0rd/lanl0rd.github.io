import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommonPartyGoogleUserElement } from './user.element'

import { CommonButtonElementModule } from '../../../button/button.element.module'

@NgModule
({
    imports:
    [
        CommonModule,
        CommonButtonElementModule
    ],
    declarations:
    [
        CommonPartyGoogleUserElement
    ],
    exports:
    [
        CommonPartyGoogleUserElement
    ],
    providers:
    [

    ]
}) 
export class CommonPartyGoogleUserElementModule
{

}