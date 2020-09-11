import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestuarantComponent } from './components/restuarant/restuarant.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'restuarant/:shopid', component:RestuarantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
