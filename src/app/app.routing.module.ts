import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: async () => (await import('./landing/landing.module')).AppLandingModule,
        pathMatch: 'full'
    },
    {
        path: 'notes',
        loadChildren: async () => (await import('../libs/notes/notes.module')).NotesModule
    },
    {
        path: 'tools',
        loadChildren: async () => (await import('../libs/tools/tools.feature.module')).ToolsFeatureModule
    },
    {
        path: 'party',
        loadChildren: async () => (await import('../libs/party/party.feature.module')).PartyFeatureModule
    },
    {
        path: 'play',
        loadChildren: async () => (await import('../libs/play/play.feature.module')).PlayFeatureModule
    },
    {
        path: 'about',
        loadChildren: async () => (await import('../libs/about/about.feature.module')).AboutFeatureModule
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule
({
  imports:
  [
    RouterModule.forRoot
    (
        routes,
        {
            useHash: true,
            // preloadingStrategy: PreloadAllModules
        }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule
{

}
