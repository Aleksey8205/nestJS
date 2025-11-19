import { Injectable } from '@nestjs/common';
import { Book } from '../entityes/boook.entity';

@Injectable()
export class BooksService {
  private books: Book[] = []; 

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  create(bookData: Omit<Book, 'id'>): Book {
    const maxId = Math.max(...this.books.map(b => b.id), 0);
    const newBook: Book = { id: maxId + 1, ...bookData };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, changes: Partial<Book>): Book | undefined {
    const index = this.books.findIndex((book) => book.id === id);
    if (index > -1) {
      Object.assign(this.books[index], changes);
      return this.books[index];
    }
    return undefined;
  }

  remove(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
}