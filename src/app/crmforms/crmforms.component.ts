import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crmforms',
  templateUrl: './crmforms.component.html',
  styleUrls: ['./crmforms.component.css']
})
export class CrmformsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CrmformsComponent>,
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }

}
