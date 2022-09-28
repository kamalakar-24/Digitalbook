import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-buy-books',
  templateUrl: './buy-books.component.html',
  styleUrls: ['./buy-books.component.css']
})
export class BuyBooksComponent implements OnInit {
book={
  username:"kamalakar",
  email:"tkr@gmail.com",
  bookId:'1'
}

buyBooks(){
  const observable: Observable<any>=this.bookService.buyBooks(this.book);
  observable.subscribe(
    responce=>{   //success function
      console.log(responce);
    },
    error=>{
      console.log(error);
    }
    
  )
}
  constructor(private bookService :BookService) { }

  ngOnInit(): void {
  }

}
