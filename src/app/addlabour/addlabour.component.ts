import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addlabour',
  templateUrl: './addlabour.component.html',
  styleUrls: ['./addlabour.component.css']
})
export class AddlabourComponent implements OnInit {
 


  constructor(
    public dialogRef: MatDialogRef<AddlabourComponent>,
  ) { }

  ngOnInit(): void {
  }


  close(){
    this.dialogRef.close()
  }
}
