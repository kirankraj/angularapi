import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }


}
