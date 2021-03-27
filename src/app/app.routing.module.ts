import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';


const routes: Routes = [
    {
        path: 'notes',
        loadChildren: async () => (await import('./notes/notes.module')).NotesModule,
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
