import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
 user = {
 name:"",
 age:0
 }

save(){
 // console.log(this.name);
 // console.log(this.age);
 const observable = this.userService.createUser(this.user);
 observable.subscribe(
   (responce:any) =>{
     console.log(responce);
    },
   function(error){
     alert("something went wrong please try again")
   }
 )
}

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
  }

}
