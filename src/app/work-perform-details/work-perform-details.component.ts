import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddlabourComponent } from '../addlabour/addlabour.component';
import { CrmformsComponent } from '../crmforms/crmforms.component';
import { HeaderComponent } from '../header/header.component';
import { WorkPerformConstingComponent } from '../work-perform-consting/work-perform-consting.component';

@Component({
  selector: 'app-work-perform-details',
  templateUrl: './work-perform-details.component.html',
  styleUrls: ['./work-perform-details.component.css']
})
export class WorkPerformDetailsComponent implements OnInit {
  public status= ['Completed','Not Completed']
  dialogRef: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  opendialog(){
    let dialogRef = this.dialog.open(WorkPerformConstingComponent, {
      // data: wip,
      width: '80%',
      disableClose: true,
      // height: '80vh'
    });

  }

  openLocationDetails(){
    let dialogRef = this.dialog.open(AddlabourComponent, {
      // data: wip,
      width: '80%',
      disableClose: true,
      // height: '80vh'
    });
  }

  openCrmForms(){
    let dialogRef = this.dialog.open(CrmformsComponent, {
      // data: wip,
      width: '80%',
      disableClose: true,
      // height: '80vh'
    });
  }

}
