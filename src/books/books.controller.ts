import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.booksService.findAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    const parsedId = parseInt(id, 10); 
    return this.booksService.findOne(parsedId);
  }

  @Post()
  createBook(@Body() bookData: any) {
    return this.booksService.create(bookData);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updatedData: any) {
    const parsedId = parseInt(id, 10); 
    return this.booksService.update(parsedId, updatedData);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    const parsedId = parseInt(id, 10); 
    return this.booksService.remove(parsedId);
  }
}