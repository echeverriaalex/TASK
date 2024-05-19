import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LandingComponent } from './modules/auth/components/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'auth', loadChildren: ()=> import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {path: 'home', component: HomeComponent},
  {path: 'task', loadChildren: ()=> import('./modules/tasks/tasks.module').then(m => m.TasksModule) },
  {path: '**', component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
