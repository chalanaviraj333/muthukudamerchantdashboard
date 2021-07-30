import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllcategoryPageRoutingModule } from './allcategory-routing.module';

import { AllcategoryPage } from './allcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllcategoryPageRoutingModule
  ],
  declarations: [AllcategoryPage]
})
export class AllcategoryPageModule {}
