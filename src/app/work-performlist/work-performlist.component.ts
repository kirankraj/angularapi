import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-performlist',
  templateUrl: './work-performlist.component.html',
  styleUrls: ['./work-performlist.component.css']
})
export class WorkPerformlistComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  workPerformDetails(){
    this.router.navigate(['/workPerformDetails']);


  }

}
