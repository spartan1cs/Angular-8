import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from './heros/heros.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';


const routes:Routes=[
{ path:'heros', component:HerosComponent},
{ path: 'dashboard', component: DashboardComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'detail/:id', component: HeroDetailComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
