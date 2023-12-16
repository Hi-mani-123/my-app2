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
import { PricePipe } from './price.pipe';
import { MemesComponent } from './memes/memes.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserformComponent } from './userform/userform.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankingdetailsComponent } from './bankingdetails/bankingdetails.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { RatingComponent } from './rating/rating.component';
import { StarsComponent } from './stars/stars.component';
import { InputcountComponent } from './inputcount/inputcount.component';
import { AboutModule } from './about/about.module';




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
    PaginationComponent,
    PricePipe,
    MemesComponent,
    CreateusersComponent,
    FlipkartComponent,
    UserdetailsComponent,
    UserformComponent,
    VehicleComponent,
    BankingdetailsComponent,
    CreatevehicleComponent,
    VehicledetailsComponent,
    ParentComponent,
    ChildComponent,
    ItemsComponent,
    NavComponent,
    CartComponent,
    RatingComponent,
    StarsComponent,
  
    InputcountComponent,
       
    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
