import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  uname ="";
  acno= "";
  pswd ="";

  //register model
  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],//array
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  //control - ts file model link to html file

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder ) { }

  ngOnInit(): void {
  }
Register(){

  console.log(this.registerForm);
  

  var uname = this.registerForm.value.uname;
  var pswd = this.registerForm.value.pswd;
  console.log("Password id :"+pswd);
  var acno = this.registerForm.value.acno;
  if(this.registerForm.valid){
    console.log(this.registerForm.get('uname')?.errors);
    
    const result =this.ds.register(acno,uname,pswd);
  if(result){
    alert("Register Successful");
    this.router.navigateByUrl('');
  }
  else{
    alert("Register Failed");
    this.router.navigateByUrl('');
  }
  }
  else{
    // console.log(this.registerForm.valid);
    
    alert("Invalid Form");
  }
  
}
}