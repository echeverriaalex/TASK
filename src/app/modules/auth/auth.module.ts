import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { SessionComponent } from './components/session/session.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    SessionComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,    
    ReactiveFormsModule
  ]
})
export class AuthModule { }