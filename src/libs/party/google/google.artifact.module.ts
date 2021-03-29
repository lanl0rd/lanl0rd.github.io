import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PartyGoogleArtifactRoutingModule } from './google.artifact.routing.module'
import { PartyGoogleArtifact } from './google.artifact'

import { CommonRouterElementModule } from '../../common/router/router.element.module'


@NgModule
({
  declarations:
  [
    PartyGoogleArtifact
  ],
  imports:
  [
    CommonModule,
    PartyGoogleArtifactRoutingModule,
    CommonRouterElementModule
  ]
})
export class PartyGoogleArtifactModule
{

}
