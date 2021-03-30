import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// import { ToolsFeatureRoutingModule } from './tools.feature.routing.module'
import { ToolsFeature } from './tools.feature'

// import { CommonRouterElementModule } from '../common/router/router.element.module'

@NgModule
({
  declarations:
  [
    ToolsFeature
  ],
  imports:
  [
    CommonModule,
    // ToolsFeatureRoutingModule,
    // CommonRouterElementModule
  ]
})
export class ToolsFeatureModule
{
    
}
