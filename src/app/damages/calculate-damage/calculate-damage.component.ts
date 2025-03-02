import { Component,OnInit } from '@angular/core';
import { CalculateDamageServicesService } from './calculate-damage-services/calculate-damage.service';
@Component({
  selector: 'app-calculate-damage',
  imports: [],
  templateUrl: './calculate-damage.component.html',
  styleUrl: './calculate-damage.component.scss',
  providers:[CalculateDamageServicesService]
})
export class CalculateDamageComponent {

}
