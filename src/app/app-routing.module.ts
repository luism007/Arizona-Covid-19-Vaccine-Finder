import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineSiteListComponent } from './components/vaccine-site-list/vaccine-site-list.component';
import { AzVaccineHomeComponent } from './components/az-vaccine-home/az-vaccine-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AzVaccineHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
