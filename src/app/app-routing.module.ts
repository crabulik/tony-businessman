import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { SettingsComponent }   from './settings.component';
import { PageNotFoundComponent } from './not-found.component';
import { ScriptGeneratorComponent } from './script-generator.component';
 
const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'generator', component: ScriptGeneratorComponent },
  { path: '',   redirectTo: '/generator', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}