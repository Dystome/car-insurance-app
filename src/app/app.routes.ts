import { AppComponent } from './app.component';
import { AddDamagesComponent } from './damages/add-damage/add-damages.component';
import { AddTypeOfDamageComponent } from './damages/add-type-of-damage/add-type-of-damage.component';
import { CalculateDamageComponent } from './damages/calculate-damage/calculate-damage.component';
import { AlldemagesComponent } from './demages/alldemages/alldemages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { UserComponent } from './modules/user/user.component';
import { LoginModule } from './modules/login/login.module';

export const routes: Routes = [

  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: UserComponent },
  { path: "app-component", component: AppComponent },
  { path: "add-demage", component: AddDamagesComponent },
  {path: "add-type-demage" , component:AddTypeOfDamageComponent},
  {path:"calculate-demage" ,  component : CalculateDamageComponent},
  {path:"all-demages" ,  component : AlldemagesComponent},
  { path: "**", redirectTo: "signup" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
