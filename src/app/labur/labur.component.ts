import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddlabourComponent } from '../addlabour/addlabour.component';

@Component({
  selector: 'app-labur',
  templateUrl: './labur.component.html',
  styleUrls: ['./labur.component.css']
})
export class LaburComponent implements OnInit {
  // public tabIndex = 0
  public tabIndex = 0
  public selected = true

  

  public obj = [
    {
        laboutType: 'Restoration Technician',
        rate: 'Standard Time',
        hourseWorked: '6.25',
        date: '13/01/2021',
        emp: 'Joshua Potter'

    },
    {
      laboutType: 'Restoration Technician',
      rate: 'Standard Time',
      hourseWorked: '6.25',
      date: '13/01/2021',
      emp: 'Joshua Potter'
    },
];

public get half(): number {
  return Math.ceil(this.obj.length );
}
  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  // openAddlabour(){
  //   let dialogRef = this.dialog.open(AddlabourComponent, {
  //     // data: wip,
  //     width: '60%',
  //     disableClose: true,
  //     // height: '80vh'
  //   });

  // }

  checkIndex(e: number) {
    this.tabIndex = e
  }

  openAddlabour(){
    this.tabIndex = 1
  }
}
