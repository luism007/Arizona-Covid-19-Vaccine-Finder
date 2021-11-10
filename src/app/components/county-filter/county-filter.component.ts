import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { VaccineSite } from 'src/app/models/VaccineSite';
import { CrossComponentCommService } from 'src/app/services/cross-component-comm.service';
import { Subscription, Subject } from 'rxjs';
import { County } from 'src/app/models/County';
import { take, takeUntil, filter } from 'rxjs/operators';
import { CountyFilterService } from 'src/app/services/county-filter.service';

@Component({
  selector: 'app-county-filter',
  templateUrl: './county-filter.component.html',
  styleUrls: ['./county-filter.component.css']
})
export class CountyFilterComponent implements OnInit, OnDestroy, AfterViewInit {

  subscriptionHandler = new Subject();
  vaccineSites: VaccineSite[] = [];
  checked = false;

  countyMap = new Map();
  countiesRetrieved = false;
  counties: any[] = [];

  filterMap = new Map();


  constructor(private crossCompService: CrossComponentCommService, private countyFilterService: CountyFilterService) {
  }

  ngOnInit(): void {
    this.getCounties();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptionHandler.next();
    this.subscriptionHandler.complete();
  }

  getCounties(): void {
    this.countiesRetrieved = false;

    this.crossCompService.getUpdatedVaccineSites()
    .pipe(takeUntil(this.subscriptionHandler))
    .subscribe(
      (sites) => {
        this.vaccineSites = sites;
        this.removeCopies();
        this.countiesRetrieved = true;
      },
      (error) => {
        console.log('Error', error);
      },
      () => {
      }
    );
  }

  handleSwitchChange($event: any): void {
    console.log($event);
    ($event.checked) ? this.checked = true : this.checked = false;
  }

  removeCopies(): void {
    for (const site of this.vaccineSites) {
      this.countyMap.set(site.county, site.county);
    }
  }

  handleDropdown($event: any): void {
    this.getCounties();
    this.getCountiesForDropdown();
  }
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:adjacent-overload-signatures
  getCountiesForDropdown(): void{
    this.createDropdown().then((items) => this.counties = items);
  }

  async handleFilterChange($event: any) {

    // if the ItemValue (item that is pressed) already exists in the Map, this means that is has been pressed in the past.
    // therefore it has recently been clicked on again, this means that the user wants to "deselect" this filter.
    if (this.filterMap.has($event.itemValue.name)) {
      this.filterMap.delete($event.itemValue.name);
    }

    // iterate through the checked items inside "value" and save them into the filterMap IF it doesnt exist there already
    for (const filterVal of $event.value) {
      if (!this.filterMap.has($event.value)){
        this.filterMap.set(filterVal.name, '');
      }
    }

    // apply the filter on the Vaccination sites that was received.
    const filterList = await this.filterVaccineSitesByCounty();
    this.sendFilteredList(filterList);
    console.log('Filtered List', filterList);
  }

  filterVaccineSitesByCounty(): Promise<VaccineSite[]>{

    return new Promise((resolve, reject) => {
      const list: VaccineSite[] = [];

      // push each site that has the county that is desired.
      for (const site of this.vaccineSites) {

        if (this.filterMap.has(site.county)) {
          list.push(site);
        }

      }

      if (list.length === 0) {
        resolve(this.vaccineSites);
      } else {
        resolve(list);
      }
    });
  }


  sendFilteredList(sites: VaccineSite[]): void {
    this.countyFilterService.sendFilteredVaccinationSites(sites);
  }


  async createDropdown(): Promise<County[]> {

    let countyList: County[] = [];

    for (const mapset of this.countyMap.values()) {
      const c = await this.createCounty(mapset);
      countyList.push(c);
    }
    return new Promise<County[]>((resolve, reject) => resolve(countyList));
  }

  createCounty(val: string): Promise<County> {
    return new Promise((resolve, reject) => {
      const c = new County(val);
      resolve(c);
    });
  }
}
