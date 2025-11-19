import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { BookSchema, Book } from 'src/schemas/book.schema';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema}])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}