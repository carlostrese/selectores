import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectoresPageComponent } from './pages/selectores-page/selectores-page.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    SelectoresPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
  ]
})
export class CountriesModule { }
