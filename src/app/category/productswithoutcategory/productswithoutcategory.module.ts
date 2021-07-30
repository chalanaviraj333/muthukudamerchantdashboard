import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductswithoutcategoryPageRoutingModule } from './productswithoutcategory-routing.module';

import { ProductswithoutcategoryPage } from './productswithoutcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductswithoutcategoryPageRoutingModule
  ],
  declarations: [ProductswithoutcategoryPage]
})
export class ProductswithoutcategoryPageModule {}
