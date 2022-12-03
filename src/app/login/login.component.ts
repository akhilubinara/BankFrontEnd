import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "My perfect Banking partner";

  account = "Enter your account here";

  acno='';
  pswd='';


  //login model
  loginForm = this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  //control - ts file model link to html file

  
  // (3rd execution)
//class - Collection of properties and methods
//properties/variables
//userdefined methods

// user defined methods (4th execution)

//dependency injection
  constructor(private ds:DataService, private router:Router,private fb:FormBuilder) { //(1st Exection)
    //it automatically invoked when the object is created.
   }

  ngOnInit(): void { // (2nd execution)
    //Life cycle hook of angular
    // for initial process component
  }


  // Login(a:any,p:any){
  //   // alert("You Clicked");
  //   var acno = a.value;
  //   var pswd = p.value;
  //   if(acno in this.userDetails){
  //     if(pswd===this.userDetails[acno].password){
  //       alert('Login Successfull');
  //     }
  //     else{
        
  //       alert('Incorrect Password');
  //     }
  //   }
  //   else{
  //     alert('Invalid Account')
  //   }
    
  // }
  // acnoChange(event:any){
  //   this.acno = event.target.value;
  //   console.log(this.acno);
    
  // }
  // pswdChange(event:any){
  //   this.pswd = event.target.value;
  //   console.log(this.pswd);
    
  // }
  Login(){
    // alert("You Clicked");
    var acno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    //var userDetails= this.ds.userDetails;

    if(this.loginForm.valid){
      var result = this.ds.login(acno,pswd);
    if(result){
      alert("Login Success");
      this.router.navigateByUrl('dashboard');
    }
    else{
      alert("Login failed");
    }
    }
    else{
      alert("Ivalid Login")
    }
       
  }
  acnoChange(event:any){
    this.acno = event.target.value;
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd = event.target.value;
    console.log(this.pswd);
    
  }
}
