import {Book} from "../books/book";

export interface BookDetail extends Book{
  numberOfPages: number,
  publishDate: string
}
