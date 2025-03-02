import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ADDTYPEOFDAMAGE } from '../../shared/mock-damages';
import { AddTypeOfDamage } from '../../shared/damages';


@Injectable()
export class AddTypeOfDamageServicesService {

  getAddTypeOfDamage(): Observable<AddTypeOfDamage[]> {
    return of (ADDTYPEOFDAMAGE);
   }
}
