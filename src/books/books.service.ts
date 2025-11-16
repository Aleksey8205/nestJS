import { Injectable } from '@nestjs/common';
import { Book } from './boook.entity';

const BOOKS: Book[] = [
  { id: 1, title: 'Война и мир', author: 'Лев Толстой' },
  { id: 2, title: 'Преступление и наказание', author: 'Фёдор Достоевский' },
];

@Injectable()
export class BooksService {
  private readonly books: Book[] = [...BOOKS]; 

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }
}