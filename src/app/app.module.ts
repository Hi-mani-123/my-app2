import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventsComponent } from './events/events.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { BankingComponent } from './banking/banking.component';
import { CreateusersComponent } from './createusers/createusers.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    DatabindingComponent,
    StructuraldirectivesComponent,
    MarksComponent,
    PipesComponent,
    EventsComponent,
    CarsComponent,
    ProductsComponent,
    UsersComponent,
    BankingComponent,
    CreateusersComponent,
    PaginationComponent,

   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
