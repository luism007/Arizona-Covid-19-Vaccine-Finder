import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { VaccineSite } from '../models/VaccineSite';

@Injectable({
  providedIn: 'root'
})
export class CrossComponentCommService {

  vaccineSites: BehaviorSubject<VaccineSite[]> = new BehaviorSubject<VaccineSite[]>([]);

  constructor() { }

  updateVaccineSites(sites: VaccineSite[]): void {
    this.vaccineSites.next(sites);
  }

  getUpdatedVaccineSites(): Observable<VaccineSite[]> {
    return this.vaccineSites;
  }


}
