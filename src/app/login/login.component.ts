import { Component, OnInit } from '@angular/core';

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

  userDetails:any = {
    1000:{acno:1000,username:'Akhil',password:"akhilu",balance:25000},
    1001:{acno:1001,username:'Anu',password:"Anu",balance:26000},
    1002:{acno:1002,username:'akku',password:'akku',balance:1000}
  }
  // (3rd execution)
//class - Collection of properties and methods
//properties/variables
//userdefined methods

// user defined methods (4th execution)


  constructor() { //(1st Exection)
    //it automatically invoked when the object is created.
   }

  ngOnInit(): void { // (2nd execution)
    //Life cycle hook of angular
    // for initial process component
  }


  Login(){
    // alert("You Clicked");
    var acno = this.acno;
    var pswd = this.pswd;
    if(acno in this.userDetails){
      if(pswd===this.userDetails[acno].password){
        alert('Login Successfull');
      }
      else{
        
        alert('Incorrect Password');
      }
    }
    else{
      alert('Invalid Account')
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
