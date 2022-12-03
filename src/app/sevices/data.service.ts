import { identifierName } from '@angular/compiler';
import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // To get current User
  currentUser="";

  // To get Current acno
  currentAcno = "";

  transaction:any;

  userDetails:any = {
    1000:{acno:1000,username:'Akhil',password:"a",balance:25000,transaction:[]},
    1001:{acno:1001,username:'Anu',password:"a",balance:26000,transaction:[]},
    1002:{acno:1002,username:'akku',password:'a',balance:100000,transaction:[]}
  }
  constructor() {
    // this.getDetails();
   }

  register(acno:any,username:any,password:any){
    let userDetails = this.userDetails;
    if(acno in userDetails){
      return false;
    }
    else{
      userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        balance:0,
        transaction:[]
      }
      console.log(userDetails);
      this.saveDetails();
      return true;
      
    }
  }
  login(acno:any,pswd:any){
    let userDetails= this.userDetails;
    if(acno in userDetails){
      if(pswd===userDetails[acno].password){

        this.currentUser = userDetails[acno].username;
        this.currentAcno = acno;
        this.saveDetails();
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  deposit(acno:any,pswd:any,amount:any){
    let userDetails = this.userDetails;
    var amt =parseFloat(amount);
    if(acno in userDetails){
      if(pswd == userDetails[acno].password){
        userDetails[acno].balance = userDetails[acno].balance + amt;
        userDetails[acno].transaction.push({
          type:'Credit',
          amount:amount
        })
        console.log(userDetails);
        this.saveDetails();
        return userDetails[acno].balance;
      }
      else{
        alert("Passsword Incorrect");
        return false;
      }
      
    }
    else{
      alert("Invalid UserDetails");
      return false;
    }
  }
  withdraw(acno:any,pswd:any,amount:any){
    var userDetails = this.userDetails;
    if(acno in userDetails){
      if(pswd == userDetails[acno].password){
        var amt = parseFloat(amount);
        if(amt<=userDetails[acno].balance-2000){
      
          userDetails[acno].balance-=amt;
          userDetails[acno].transaction.push({
            type:'Debit',
            amount:amount
          })
          return userDetails[acno].balance;
          
        }
        else{
          alert("___Insufficient Balance___  Keep Minimum Balance 2000");
          return false;
        }
      }
      else{
        alert("Password Incorrect");
        return false;
      }
    }
    else{
      return false;
    }
  }
  balance(acno:any){
    return this.userDetails[acno].balance;
  }

    getTransaction(acno:any){
    return this.userDetails[acno].transaction;
    }
saveDetails(){
  if(this.userDetails){
    localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
  }
  if(this.currentUser){
    localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
  }
  if(this.currentAcno){
    localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
  }
}
getDetails(){
  if(this.userDetails){
    this.userDetails=JSON.parse(localStorage.getItem('Database')|| '')
  }
  if(this.currentUser){
    this.currentUser=JSON.parse(localStorage.getItem('currentUser')|| '')
  }
  if(this.currentAcno){
    this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')|| '')
  }
}
}
