import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import {DoctorProfileComponent} from './doctor-profile/doctor-profile.component';

const routes: Routes = [
  { path:'patient-profile', component: PatientProfileComponent},
  { path:'doctor-profile', component: DoctorProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
