import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymemtComponent } from './card-paymemt/card-paymemt.component';
import { NetBankingComponent } from './net-banking/net-banking.component';


@NgModule({
  declarations: [
    UpiPaymentComponent,
    CardPaymemtComponent,
    NetBankingComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
