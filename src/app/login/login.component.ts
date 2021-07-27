import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router,private http:HttpClient,public dialog: MatDialog,) { }
  ipaddress = '';
  isSubmitted = false;
  authError = false;
  authMessage = 'Invalid Email and Password';
  showPopup = false;

  ngOnInit() {
    this.getIPAddress();
}
  

 getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
       this.ipaddress = res.ip;
    });
  }

  sendDialogbox(email: string)
  {
    let dialogRef = this.dialog.open(DialogboxComponent, {
      data: { email: email, ipAddress: this.ipaddress},
      width: '30%',
      disableClose: true,
    });
  }

  onSubmit(data: any){
    this.isSubmitted = true
  this.http.post('http://182.18.140.44:8000/api/auth/',data).subscribe((result: any)=>{
    // console.log("result",result)
    sessionStorage.setItem('uEmpId',result.uEmpId)
    this.authError=false;
     this.router.navigate(['/homes']);
  },
  (error:HttpErrorResponse)=>{
    console.log(error);
    this.authError = true;
    if(error.status !== 401){
      this.authMessage = 'Invalid and Email password ';
    }
    if(error.status === 401){
      this.sendDialogbox(data.username);
    }
  })
  }
}


    // const email = this.username;
    // const password = this.password;
  //   this.http.post('http://182.18.140.44:8000/api/auth/',
  //       {
  //           username:this.username,
  //           password:this.password
  //       }
  //   ).subscribe((result)=>{
  //     console.log(result)
  //   })
  // }


  // console.log(email);
    // console.log(this.password);
  //   if (this.username === 'admin' && this.password === 'admin') {
  //     this.router.navigate(["homes"]);
  //   } else {
  //     this.loginFail =true
  //     // alert("Invalid credentials");
  //   }
  // }

