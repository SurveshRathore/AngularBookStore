import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  bookId:any;

  constructor(private book: BookService, private snack: MatSnackBar){}
  ngOnInit(){
    this.bookId = localStorage.getItem('bookID');
    console.log('bookId',this.bookId);
    
  }

  addBookToCart(){
    let payload={
      bookId:[this.bookId],
      bookQuantity:1
    }
    this.book.addBookToCartAPI(payload).subscribe((response)=>{
      console.log(response);
      this.snack.open('Book added to card', '', {duration:2000});
    })
  }

  addBookToWhislist(){
    let payload={
      bookId:[this.bookId]
      
    }
    this.book.addBookToWishListAPI(payload).subscribe((response)=>{
      console.log(response);
      this.snack.open('Book added to whishlist', '', {duration:2000});
    })
  }
}
