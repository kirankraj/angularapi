import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobsComponent } from './jobs/jobs.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SitedetailsComponent } from './sitedetails/sitedetails.component';
import { WorkPerformlistComponent } from './work-performlist/work-performlist.component';
import { WorkPerformDetailsComponent } from './work-perform-details/work-perform-details.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { WorkPerformConstingComponent } from './work-perform-consting/work-perform-consting.component';
import { LaburComponent } from './labur/labur.component';
import { PartsComponent } from './parts/parts.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { AddlabourComponent } from './addlabour/addlabour.component';
import { CrmformsComponent } from './crmforms/crmforms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DialogboxComponent } from './dialogbox/dialogbox.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JobsComponent,
    SitedetailsComponent,
    WorkPerformlistComponent,
    WorkPerformDetailsComponent,
    LoginComponent,
    HeaderComponent,
    WorkPerformConstingComponent,
    LaburComponent,
    PartsComponent,
    EquipmentsComponent,
    AddlabourComponent,
    CrmformsComponent,
    DialogboxComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    

  ],
  providers: [ HttpClientModule],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
