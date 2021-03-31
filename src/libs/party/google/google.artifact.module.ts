import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PartyGoogleArtifact } from './google.artifact'

import { CommonPartyGoogleUserElementModule } from '../../common/party/google/user/user.element.module'

@NgModule
({
  declarations:
  [
    PartyGoogleArtifact
  ],
  imports:
  [
    CommonModule,
    CommonPartyGoogleUserElementModule
  ]
})
export class PartyGoogleArtifactModule
{

}
