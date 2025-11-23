import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from 'src/schemas/book.schema';
import { CreateBookDto } from '../entityes/dto/create-book.dto';
import { UpdateBookDto } from '../entityes/dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.findOne(id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book | null> {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Promise<void> {
    return this.booksService.remove(id);
  }
}