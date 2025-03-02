import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CALCULATEDAMAGES } from '../../shared/mock-damages';
import { CalculateDamages } from '../../shared/damages';


@Injectable()
export class CalculateDamageServicesService {

  getCalculateDamages(): Observable<CalculateDamages[]> {
    return of (CALCULATEDAMAGES);
   }
}
