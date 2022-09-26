import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL ="http://localhost:9090/api/book/";
@Injectable({
  providedIn: 'root'
})
export class BookService {
  saveBook(book: { title: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.post(URL+'createBook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  constructor(private http: HttpClient) { }
}
