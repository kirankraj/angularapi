import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  public tabIndex = 0
  public selected = true
  public Category = ['category1','category2']
  public number = ['001','002','003']

  

  public obj = [
    {
      date: '13/07/2021',
        type: 'Part',
        partNo: '001',
        desc: 'Big L sjhg',
        quntity: '8.00'

    },
    {
      date: '13/07/2021',
      type: 'Part',
      partNo: '0012',
      desc: 'Big L sjhg',
      quntity: '8.00'
    },
];

public get half(): number {
  return Math.ceil(this.obj.length );
}
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<PartsComponent>,) { }

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


}
