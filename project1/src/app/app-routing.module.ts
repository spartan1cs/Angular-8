import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros/heros.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';


const routes:Routes=[
{ path:'heros', component:HerosComponent},
{ path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
