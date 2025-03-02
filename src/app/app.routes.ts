import { Routes } from '@angular/router';
import { UsersComponent } from './modules/users/users.component';
import { AppComponent } from './app.component';
import { AddDamagesComponent } from './damages/add-damage/add-damages.component';
import { AddTypeOfDamageComponent } from './damages/add-type-of-damage/add-type-of-damage.component';
import { CalculateDamageComponent } from './damages/calculate-damage/calculate-damage.component';
import { AlldemagesComponent } from './demages/alldemages/alldemages.component';

export const routes: Routes = [
  { path: "users-component", component: UsersComponent },
  { path: "app-component", component: AppComponent },
  { path: "add-demage", component: AddDamagesComponent },
  {path: "add-type-demage" , component:AddTypeOfDamageComponent},
  {path:"calculate-demage" ,  component : CalculateDamageComponent},
  {path:"all-demages" ,  component : AlldemagesComponent},

  { path: "**", redirectTo: "users-component" }
];
