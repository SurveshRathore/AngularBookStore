import { Component } from '@angular/core';
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
  constructor(private book:BookService, private route:Router, private dataService:DataService){}

  ngOnInit(){
    this.getBooks();

    this.dataService.currentMessage.subscribe((response:any)=>{
      this.searchData = response;
      console.log(response);
      console.log(this.searchData);
      
      
    })
  }

  getBooks(){
    this.book.getAllBook().subscribe((response:any)=>{
      console.log(response);
      console.log(response.response);
      console.log(response.response.authorName);
      console.log(response.response.bookName);
      this.BookArray = response.response;
      console.log(this.BookArray);
      
      
    })
  }

  openBookDetails(book:any){
    this.route.navigateByUrl('/home/bookdetails')
    console.log(book);
    console.log(book.bookID);
    localStorage.setItem('bookID',book.bookID)
    
  }
}
