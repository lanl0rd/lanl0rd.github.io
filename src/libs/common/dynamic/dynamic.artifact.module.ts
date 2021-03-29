import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CommonDynamicArtifact } from './dynamic.artifact.ng'

import { CommonDynamicElementModule } from './dynamic.element.module.ng'

@NgModule
({
    imports: 
    [
        CommonModule,
        CommonDynamicElementModule,
        RouterModule.forChild([
            {
                path: '',
                component: CommonDynamicArtifact
            }
        ])
    ],
     declarations: 
    [
        CommonDynamicArtifact
    ],
    exports: 
    [
        CommonDynamicArtifact,
        RouterModule
    ],
    providers: 
    [

    ]
}) 
export class CommonDynamicArtifactModule
{
    
}