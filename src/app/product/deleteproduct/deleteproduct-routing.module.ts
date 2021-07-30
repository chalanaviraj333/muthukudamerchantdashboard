import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteproductPage } from './deleteproduct.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteproductPageRoutingModule {}
