import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  BASE_URL ="http://localhost:9090/api/book/";
  saveBook(book: { title: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.post(this.BASE_URL+'createBook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  updateBook(book :any){
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.put(this.BASE_URL+'updateBook',book,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  buyBooks(book :any){
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.post(this.BASE_URL+'buyBooks',book,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  refund(book :any){
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.put(this.BASE_URL+'refund',book,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  searchBooks(book :any){
    return this.http.get(this.BASE_URL+'searchBooks',book);
  }
  constructor(private http: HttpClient) { }
}
