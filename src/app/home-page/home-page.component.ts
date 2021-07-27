import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public isCollapsed=true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  jobsOpen(){
    // this.router.navigateByUrl('/jobs');
    this.router.navigate(['/jobs']);

  }

}
