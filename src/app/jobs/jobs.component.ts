import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  location: any;
  jobDetails:any;

  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`http://182.18.140.44:8000/jobdetails/app_empSchJob/${sessionStorage.getItem('uEmpId')}`).subscribe(response => {
      this.jobDetails = response
    })  
  }


  back(){
    this.router.navigate(['/homes'])
  }
  jobList(){
    this.router.navigate(['/jobList']);
  }

}
