import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { SitedetailsComponent } from './sitedetails/sitedetails.component';
import { WorkPerformDetailsComponent } from './work-perform-details/work-perform-details.component';
import { WorkPerformlistComponent } from './work-performlist/work-performlist.component';

const routes: Routes = [
  // { path: 'jobs',loadChildren:() => import('./pages/jobs/jobs.module').then(m => m.JobsModule)}
  {path:'', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  {path: 'homes', component:HomePageComponent},

  {path: 'jobs', component:JobsComponent},
  {path: 'jobList', component:SitedetailsComponent},
  {path: 'workPerformDetails', component:WorkPerformDetailsComponent},
  {path: 'workPerform', component:WorkPerformlistComponent},
  
  {path:'**', redirectTo: '/login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
