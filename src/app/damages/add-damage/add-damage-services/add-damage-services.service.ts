import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ADDDAMAGES } from '../../shared/mock-damages';
import { AddDamages } from '../../shared/damages';


@Injectable()
export class AddDamageServicesService {

  getAddDamages(): Observable<AddDamages[]> {
    return of (ADDDAMAGES);
   }
}
