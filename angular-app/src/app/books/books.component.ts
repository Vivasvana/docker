import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Book} from "./book";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  public books: Book[];
  private subscription: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.subscription = this.apiService.getBooks().subscribe( (books: Book[]) => {
      this.books = books;
    });
  }
  ngOnDestroy(){
    this.subscription && this.subscription.unsubscribe();
  }
}
