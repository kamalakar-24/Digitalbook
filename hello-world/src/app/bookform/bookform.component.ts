import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
book={
  title:"Learn Angular",
  active:true,
  author:"jhon",
  catagory:"IAM",
  content:"User",
  isBlocked:false,
  price:12345,
  publishedDate:"2/2/2022",
  publisher:"sam"
}

save(){
  console.log('saved');
  const observable= this.bookService.saveBook(this.book);
  observable.subscribe(response=>{
    console.log(response);
  })
}

constructor(private bookService : BookService) { }
  ngOnInit(): void {
  }

}
