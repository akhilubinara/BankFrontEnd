import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

acno="";
pswd="";
amount="";
w_acno="";
w_pswd="";
w_amount="";
b_acno="";

user = "";

sdate:any;
//deposit model
depositForm = this.fb.group({
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})
//withdraw model
withdrawForm = this.fb.group({
  w_amount:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],//array
  w_acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  w_pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})
//control - ts file model link to html file
//control - ts file model link to html file
  constructor(private ds:DataService, private fb:FormBuilder, private router:Router) {
    this.user = this.ds.currentUser;
    this.sdate = new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert('Please Login');
      this.router.navigateByUrl('')
    }
  }
Deposit(){
  var acno = this.depositForm.value.acno;
  console.log(acno);
  var pswd = this.depositForm.value.pswd;
  console.log(pswd);
  var amount = this.depositForm.value.amount;
  console.log(amount);
  if(this.depositForm.valid){
    const result = this.ds.deposit(acno,pswd,amount);
  if(result){
    alert(`${amount} is credited... Available Balance is ${result}`);
  }
  else{
    alert("Deposit Failed");
  }
  }
  else{
    alert("Invalid")
  }
}
Withdraw(){
  var acno = this.withdrawForm.value.w_acno;
  var pswd = this.withdrawForm.value.w_pswd;
  var amount = this.withdrawForm.value.w_amount;
  if(this.depositForm.valid){
  const result = this.ds.withdraw(acno,pswd,amount);
    if(result){
      alert(`${amount} is debited.... Abailable balance is :${result}`)
    }
    else{
      alert("Withdraw failed");
    }
  }
  else{
    alert("Invalid")
  }
  }
  balance(){
    var acno = this.b_acno;
    const result = this.ds.balance(acno);
    if(result){
      alert(`Balance of ${acno} is : ${result}`);
    }
    else{
      alert("An error occurs");
    }
  }
  Logout(){
    //remove username and acno
    if(confirm('Do You Want to Logout...?'))
    {
      localStorage.removeItem('currentAcno')
      localStorage.removeItem('currentUser')
      this.router.navigateByUrl('')
    }
    
  }
  Delete(){
      this.acno = JSON.parse(localStorage.getItem('currentAcno') || '')
  }
  onCancel(){
    this.acno = '';
  }
}