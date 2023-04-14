import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = "Book";

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`https://localhost:7162/api/${this.url}`);
  }

  public updateBook(book: Book): Observable<Book[]> {
    return this.http.put<Book[]>(
      `https://localhost:7162/api/${this.url}`,
      book
    );
  }

  public createBook(book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(
      `https://localhost:7162/api/${this.url}`,
      book
    );
  }

  public deleteBook(book: Book): Observable<Book[]> {
    return this.http.delete<Book[]>(
      `https://localhost:7162/api/${this.url}/${book.id}`
    );
  }
}
