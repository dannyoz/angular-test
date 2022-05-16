import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  {
    path: '',
    component: RegionsComponent,
  },
  {
    path: 'region/:regionName',
    component: RegionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
