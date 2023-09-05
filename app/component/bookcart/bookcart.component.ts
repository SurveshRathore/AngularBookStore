import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-bookcart',
  templateUrl: './bookcart.component.html',
  styleUrls: ['./bookcart.component.scss']
})
export class BookcartComponent {

  BookName: any;
  AuthorName: any;
  Rating: any;
  RatedPerson: any;
  DiscountPrice: any;
  OriginalPrice: any;

  BookArray: any = [];

  searchData: any = '';
  bookCount: any;

  pageIndex: number = 0;
  pageSize: number = 6;
  totalRecords: number = 0;
  p = 1;

  constructor(private book: BookService, private route: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getBooks();


    this.dataService.currentMessage.subscribe((response: any) => {
      this.searchData = response;
      console.log(response);
      console.log(this.searchData);


    })
  }

  getBooks() {
    this.book.getAllBook().subscribe((response: any) => {
      console.log(response);
      console.log(response.response);
      console.log(response.response.authorName);
      console.log(response.response.bookName);
      this.BookArray = response.response;
      console.log(this.BookArray);
      this.bookCount = this.BookArray.length;
      this.totalRecords = this.BookArray.length;
      
    })
  }

  openBookDetails(book: any) {
    this.route.navigateByUrl('/home/bookdetails')
    console.log(book);
    console.log(book.bookID);
    localStorage.setItem('bookID', book.bookID)

  }

  sortBookByValue(value: any) {
    console.log('within sort');

    if (value.value == 'Sort by relevance') {
      this.BookArray.sort((a: any, b: any) => Number(a.bookID) - Number(b.bookID));
      console.log('Sort by relevance')
    }
    else if (value.value == 'Price: Low to High') {
      this.BookArray.sort((a: any, b: any) => Number(a.discountPrice) - Number(b.discountPrice));
      console.log('low to high');

    }

    else if (value.value == 'Price: High to Low') {
      this.BookArray.sort((a: any, b: any) => Number(b.discountPrice) - Number(a.discountPrice));
      console.log('high to low');

    }
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;

    
    this.getBooks();
  }
}
