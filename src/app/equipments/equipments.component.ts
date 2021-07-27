import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  public tabIndex = 0
  public selected = true
  public Category = ['category1','category2']
  public number = ['001','002','003']

  

  public obj = [
    {
      allowanceType: 'Site Allowance',
        quantity: '100',

        date: '13/01/2021',
        emp: 'Joshua Potter'

    },
    {
      allowanceType: 'Site Allowance',
      quantity: '100',
      date: '13/01/2021',
      emp: 'Joshua Potter'
    },
];
public get half(): number {
  return Math.ceil(this.obj.length );
}
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<EquipmentsComponent>,) { }

  ngOnInit(): void {
  }

  checkIndex(e: number) {
    this.tabIndex = e
  }

  openAddlabour(){
    this.tabIndex = 1
  }

  close(): void {
    this.dialogRef.close();
  }

  public obj1 = [
    {
      date: '13/07/2021',
        type: 'Excess Killometre Charges [greater than 100km round trip]',
        desc: 'Excess Killometre Charges [greater than 100km round trip]',
        quntity: '8.00'

    },
    {
      date: '13/07/2021',
      type: 'Excess Killometre Charges [greater than 100km round trip]',
      desc: 'Excess Killometre Charges [greater than 100km round trip]',
      quntity: '8.00'
    },
];
public get half1(): number {
  return Math.ceil(this.obj.length );
}
  
  checkIndex1(e: number) {
    this.tabIndex = e
  }

  openAddFreight(){
    this.tabIndex = 1
  }

  close1(): void {
    this.dialogRef.close();
  }

}
