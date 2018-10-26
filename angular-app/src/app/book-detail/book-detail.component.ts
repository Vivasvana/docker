import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookDetail} from "./book-detail";
import {Subscription} from "rxjs/Subscription";
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  public book: BookDetail;
  private subscription: Subscription;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(v => {
      this.subscription = this.apiService.getBook(v.id).subscribe( (book: BookDetail) => {
        if(book.id === -1){
          this.router.navigate(['/not-found']);
        }else{
          this.book = book;
        }

      });
    });



  }
  ngOnDestroy(){
    this.subscription && this.subscription.unsubscribe();
  }
}
