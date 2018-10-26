import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BooksComponent} from "./books/books.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'books', component: BooksComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
