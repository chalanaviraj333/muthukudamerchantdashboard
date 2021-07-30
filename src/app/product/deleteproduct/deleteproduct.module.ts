import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteproductPageRoutingModule } from './deleteproduct-routing.module';

import { DeleteproductPage } from './deleteproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteproductPageRoutingModule
  ],
  declarations: [DeleteproductPage]
})
export class DeleteproductPageModule {}
