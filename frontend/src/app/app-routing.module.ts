import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/login',component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // { path: 'fuel', loadChildren: () => import('./pages/fuel/fuel.component').then(m => m.FuelComponent) },
  { path: 'fuel', loadChildren: () => import('./pages/fuel/fuel.module').then(m => m.FuelModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
