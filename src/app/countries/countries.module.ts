import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectoresPageComponent } from './pages/selectores-page/selectores-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectoresPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
