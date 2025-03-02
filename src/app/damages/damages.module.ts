import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDamagesComponent } from './add-damage/add-damages.component';
import { AddDamageServicesService } from './add-damage/add-damage-services/add-damage-services.service';
import { AddTypeOfDamageComponent } from './add-type-of-damage/add-type-of-damage.component';
import { AddTypeOfDamageServicesService } from './add-type-of-damage/add-type-of-damage-services/add-type-of-damage.service';
import { CalculateDamageComponent } from './calculate-damage/calculate-damage.component';
import { CalculateDamageServicesService } from './calculate-damage/calculate-damage-services/calculate-damage.service';



@NgModule({
  declarations: [],
  providers: [AddDamageServicesService,CalculateDamageServicesService,AddTypeOfDamageServicesService],
  imports: [
    CommonModule
  ]
})
export class AddDamagesModule { }


export class TypeOfDamageModule { }


export class CalculateDamageModule { }


