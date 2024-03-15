import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { SelectoresPageComponent } from './pages/selectores-page/selectores-page.component';
7

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'selector', component: SelectoresPageComponent},
      { path: '**', redirectTo: 'selector'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
