import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book={
    bookId:"",
    title:" ",
    active:"",
    catagory:"",
    isBlocked:"",
    price:"",
    publisher:""
  }
  updateBook(){
    const observable: Observable<any>= this.bookService.updateBook(this.book);
    observable.subscribe(
      responce =>{//success.fuction
        console.log(responce);
       },
       error=>{
         console.log(error);
       }
    )
  }
  constructor(private bookService : BookService) { }
  ngOnInit(): void {
  }
}
