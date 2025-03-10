import { Component } from '@angular/core';
import { AddInsuranceService } from '../../shared/services/add-insurance.service';

@Component({
  selector: 'app-add-isurance',
  imports: [],
  templateUrl: './add-isurance.component.html',
  styleUrl: './add-isurance.component.scss'
})
export class AddIsuranceComponent {
  private addInsuranceService: AddInsuranceService;
  
  constructor() {
    this.addInsuranceService = new AddInsuranceService();
  }

  addInsurance() {
    this.addInsuranceService.addInsurance();
  }
}
