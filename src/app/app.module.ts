import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {DividerModule} from 'primeng/divider';
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { TooltipModule } from 'primeng/tooltip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MultiSelectModule} from 'primeng/multiselect';
import {SidebarModule} from 'primeng/sidebar';
import { VaccineSiteListComponent } from './components/vaccine-site-list/vaccine-site-list.component';
import { VaccineSiteCardComponent } from './components/vaccine-site-card/vaccine-site-card.component';
import { FakeHttpInterceptor } from './services/fake-backend/fake-http-interceptor';
import { AzVaccineHomeComponent } from './components/az-vaccine-home/az-vaccine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountyFilterComponent } from './components/county-filter/county-filter.component';
import { CrossComponentCommService } from './services/cross-component-comm.service';
import { SiteContentInfoComponent } from './components/site-content-info/site-content-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    VaccineSiteListComponent,
    VaccineSiteCardComponent,
    AzVaccineHomeComponent,
    CountyFilterComponent,
    SiteContentInfoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    DataViewModule,
    BadgeModule,
    VirtualScrollerModule,
    InputTextModule,
    AccordionModule,
    DividerModule,
    FieldsetModule,
    ButtonModule,
    TooltipModule,
    InputSwitchModule,
    MultiSelectModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: FakeHttpInterceptor,
    multi: true
  },
  CrossComponentCommService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
