import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ObjectionsComponent} from './courses/objections/objections.component';
import {Step1Component} from './courses/objections/step1/step1.component';
import {Step2Component} from './courses/objections/step1/step2/step2.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'courses/objections',
    component: ObjectionsComponent
  },
  {
    path: 'courses/objections/step1',
    component: Step1Component
  },
  {
    path: 'courses/objections/step2',
    component: Step2Component
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
