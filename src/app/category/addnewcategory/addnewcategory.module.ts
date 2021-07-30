import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewcategoryPageRoutingModule } from './addnewcategory-routing.module';

import { AddnewcategoryPage } from './addnewcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewcategoryPageRoutingModule
  ],
  declarations: [AddnewcategoryPage]
})
export class AddnewcategoryPageModule {}
