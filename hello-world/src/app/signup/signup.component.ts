import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    username:"kamalaakar",
    password:"123456",
    email:"tkr24@gmail.com"
    }
    signup(){
      const observable: Observable<any>= this.userService.signup(this.user);
      observable.subscribe(
        responce =>{//success.fuction
          console.log(responce);
         },
         error=>{
           console.log(error);
         }
           
      )
  
    }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
 

}
