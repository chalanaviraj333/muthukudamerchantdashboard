import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductswithoutcategoryPage } from './productswithoutcategory.page';

const routes: Routes = [
  {
    path: '',
    component: ProductswithoutcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductswithoutcategoryPageRoutingModule {}
