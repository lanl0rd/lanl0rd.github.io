import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PartyGoogleArtifact } from './google.artifact'

const routes: Routes = [
    {
        path: '',
        component: PartyGoogleArtifact
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
export class PartyGoogleArtifactRoutingModule
{

}
