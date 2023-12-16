import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { MemesComponent } from './memes/memes.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserformComponent } from './userform/userform.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { ParentComponent } from './parent/parent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { RatingComponent } from './rating/rating.component';
import { StarsComponent } from './stars/stars.component';

import { InputcountComponent } from './inputcount/inputcount.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';



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
  {path:'banking/:id', component:BankingComponent},
  {path:'edit-user/:id', component:BankingComponent},
  {path:'create-user/:id', component:BankingComponent},
  {path:'createusers',canDeactivate:[NotifyGuard], component:CreateusersComponent},
  {path:'pagination', component:PaginationComponent },
  {path:'memes', component:MemesComponent},
  {path:'flipkart', component:FlipkartComponent},
  {path:'userdetails/:id', component:UserdetailsComponent},
  {path:'edit-user/:id', component:CreateusersComponent},
  {path:'create-user/:id', component:CreateusersComponent},
  {path:'userform', component:UserformComponent},
  {path:'vehicle', component:VehicleComponent},
  {path:'createvehicle', component:CreatevehicleComponent},
  {path:'vehicledetails/:id', component:VehicledetailsComponent},
  {path:'editvehicle-details/:id', component:CreatevehicleComponent},
  {path:'parent', component:ParentComponent},
  {path:'items', component:ItemsComponent},
  {path:'nav', component:NavComponent},
  {path:'cart' , component:CartComponent},
  {path:'rating', component:RatingComponent},
  {path:'stars', component:StarsComponent},
  {path:'about-company', component:AboutCompanyComponent},
  {path:'inputcount', component:InputcountComponent},
  {path: 'payments',
  loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)}
]},
{path:'',component:LoginComponent},
{path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
