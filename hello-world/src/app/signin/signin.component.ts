import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user={

    username:"",
 
    password:""
 
 }
 
 
 
   signin(){
 
     // console.log(this.Username);
 
     // console.log(this.Password)
 
     const observable=this.userService.signin(this.user);
 
     observable.subscribe(
 
       (Response:any)=>{
 
         console.log(Response);
         sessionStorage.setItem('credentials',JSON.stringify(Response));
         this.router.navigate(['']);
 
       },
 
       function(error){
 
         alert("Something went wrong Please try again")
 
       }
 
       )
 
      
 
   }
 
 
 
   constructor(private userService:UserService) { }
 
 
 
   ngOnInit(): void {
 
 }
}