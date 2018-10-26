import { Injectable } from '@angular/core';
import {Book} from "./books/book";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {

  private apiUrl: string = 'http://192.168.99.100:3000';

  constructor(private http: HttpClient) {
  }

  public getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl + '/books');
  }

  public getBook(id: number): Observable<Book>{
    return this.http.get<Book>(this.apiUrl + '/books/' + id);
  }
}
