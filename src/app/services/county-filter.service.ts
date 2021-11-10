import { Injectable } from '@angular/core';
import { VaccineSite } from '../models/VaccineSite';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountyFilterService {

  filteredVaccineSites: Subject<VaccineSite[]> = new Subject();

  constructor() { }


  // the county-filter.component is responsible for composing the final filtered list.
  // Once that filtering is complete, it'll trigger this function
  // which updates the 'filteredVaccineSites' subject. Updating this subject will allow other components ...
  // ... to get the most up-to-date filtered results.
  sendFilteredVaccinationSites(sites: VaccineSite[]): void {
    this.filteredVaccineSites.next(sites);
  }

  // components that 'subscribe' to the 'filteredVaccineSites' subject will be able to get the most up-to-date filtered results.
  getFilteredVaccinationSites(): Observable<VaccineSite[]> {
    return this.filteredVaccineSites;
  }
}
