import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitedetails',
  templateUrl: './sitedetails.component.html',
  styleUrls: ['./sitedetails.component.css']
})
export class SitedetailsComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  workPerformList(){
    this.router.navigate(['/workPerform']);
  }

}
