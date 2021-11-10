import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cv19DataService } from 'src/app/services/cv19-data.service';
import { VaccineSite } from 'src/app/models/VaccineSite';
import { Subscriber, Subscription } from 'rxjs';
import { CrossComponentCommService } from 'src/app/services/cross-component-comm.service';
import { CountyFilterService } from 'src/app/services/county-filter.service';

@Component({
  selector: 'app-vaccine-site-list',
  templateUrl: './vaccine-site-list.component.html',
  styleUrls: ['./vaccine-site-list.component.css']
})
export class VaccineSiteListComponent implements OnInit, OnDestroy {

  vaccineSites: VaccineSite[] = [];
  vaccineSiteSubscription = new Subscription();
  awaitingSites: boolean;

  constructor(
    private cv19VaccineService: Cv19DataService,
    private crossCompService: CrossComponentCommService,
    private countyFilterService: CountyFilterService) {
    this.awaitingSites = true;
  }

  ngOnInit(): void {
    this.getVaccinationSites();
    this.getFilterVaccinationSites();
  }

  ngOnDestroy(): void {
    this.vaccineSiteSubscription.unsubscribe();
  }

  sortByAppointmentAvailability(a: VaccineSite, b: VaccineSite): number {
    return (a.appointments.length > b.appointments.length) ? -1 : 1;
  }

  getVaccinationSites(): void {
    this.awaitingSites = true;
    setTimeout(() => {
      this.vaccineSiteSubscription = this.cv19VaccineService
      .getVaccineSites()
      .subscribe(
          (sites) => {
            this.vaccineSites = sites.sort((a, b) => this.sortByAppointmentAvailability(a, b));
          },
          (error) => {
            console.log('Error', error);
          },
          () => {
            this.crossCompService.updateVaccineSites(this.vaccineSites);
            this.awaitingSites = false;
          }
      );
    }, 5000);

  }

  getFilterVaccinationSites(): void {
    this.awaitingSites = true;
    setTimeout(() => {
    this.countyFilterService
    .getFilteredVaccinationSites()
    .subscribe(
      (sites) => {
        if (sites.length > 0) {
          this.vaccineSites = sites.sort((a, b) => this.sortByAppointmentAvailability(a, b));
        }
      },
      (error) => {
        console.log('Error in filtering sites');
      },
      () => {
        this.awaitingSites = false;
      }
    );
    }, 5000);
  }



}
