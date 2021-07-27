import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { email: string, ipAddress: string},private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  onValidate(data: any){
    data.email = this.data.email;
    data.ipaddress = this.data.ipAddress;
    this.http.post('http://182.18.140.44:8000/api/ip/',data).subscribe((result: any)=>{
      this.router.navigate(['/homes']);
    },
  (error:HttpErrorResponse)=>{
  
  })
}
}
