import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventsComponent } from './events/events.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { BankingComponent } from './banking/banking.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateusersComponent } from './createusers/createusers.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NotifyGuard } from './notify.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,  canActivate:[AuthenticationGuard],children:[
  {path:'structuraldirectives',component:StructuraldirectivesComponent},
  {path:'login', component:LoginComponent},
  {path:'marks',canDeactivate:[NotifyGuard] ,component:MarksComponent},
  {path:'pipes', component:PipesComponent},
  {path:'events',component:EventsComponent},
  {path:'cars', component:CarsComponent},
  {path:'products', canDeactivate:[NotifyGuard],component:ProductsComponent},
  {path:'users', canDeactivate:[NotifyGuard], component:UsersComponent},
  {path:'banking', component:BankingComponent},
  {path:'createusers',canDeactivate:[NotifyGuard], component:CreateusersComponent},
  {path:'pagination', component:PaginationComponent }
]},
{path:'',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
