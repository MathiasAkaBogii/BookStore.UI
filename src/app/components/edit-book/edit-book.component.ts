import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
updateBook(arg0: Book) {
throw new Error('Method not implemented.');
}
  @Input() book?: Book;
  @Output() booksUpdated = new EventEmitter<Book[]>();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

  }

  update(book: Book) {
    this.bookService.updateBook(book).subscribe((book: Book[]) => {
      this.booksUpdated.emit(book);
    });
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book).subscribe((book: Book[]) => {
      this.booksUpdated.emit(book);
    });
  }

  createBook(book: Book) {
    this.bookService.createBook(book).subscribe((book: Book[]) => {
      this.booksUpdated.emit(book);
    });
  }
}
