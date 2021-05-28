import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

const routes: Routes = [
  {path: 'add-airline', component: AddAirlineComponent},
  {path: 'manage-airlines', component:ManageAirlinesComponent},
  {path: 'admin', component:AdminNavbarComponent},
  {path: 'user', component:UserNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AddAirlineComponent,
  ManageAirlinesComponent,
  MainNavbarComponent,
  AdminNavbarComponent,
  UserNavbarComponent
]
