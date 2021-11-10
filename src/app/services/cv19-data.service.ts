import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaccineSite } from '../models/VaccineSite';
@Injectable({
  providedIn: 'root'
})
export class Cv19DataService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:1200/api/vaccines/';

  getVaccineSites(): Observable<VaccineSite[]> {
    const url = this.baseUrl + 'get-vaccine-sites';
    return this.http.get<VaccineSite[]>(url);
  }


}
