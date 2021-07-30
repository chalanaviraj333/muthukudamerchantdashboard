import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllcategoryPage } from './allcategory.page';

const routes: Routes = [
  {
    path: '',
    component: AllcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllcategoryPageRoutingModule {}
