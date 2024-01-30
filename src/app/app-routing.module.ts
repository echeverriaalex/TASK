import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'auth', loadChildren: ()=> import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
