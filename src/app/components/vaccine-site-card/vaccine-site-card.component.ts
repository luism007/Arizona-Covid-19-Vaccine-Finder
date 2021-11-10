import { Component, OnInit, Input } from '@angular/core';
import { VaccineSite } from 'src/app/models/VaccineSite';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vaccine-site-card',
  templateUrl: './vaccine-site-card.component.html',
  styleUrls: ['./vaccine-site-card.component.css']
})
export class VaccineSiteCardComponent implements OnInit {

  @Input()
  vaccineSiteInfo!: VaccineSite;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }


  getDirections(site: VaccineSite): void {
    window.open(site.addressUrl);
  }

  goRegister(site: VaccineSite): void {
    console.log(site);
    window.open(site.registration_url);
  }

}
