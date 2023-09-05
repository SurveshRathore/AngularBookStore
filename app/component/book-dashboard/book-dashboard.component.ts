import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { DataService } from 'src/app/service/data.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent {

  @ViewChild(CartComponent) cart:any;

  batchLength: any;

  constructor(private book:BookService, private route: Router, private dataService:DataService){}
  ngOnInit(){
    this.getBooks();
    // console.log('init cartLength',this.cart.cartLength);
    this.batchLength = localStorage.getItem('cartValue');
    console.log('batchLength',this.batchLength);
    
    
  }

  // ngAfterViewInit() {
  //   console.log('cartLength',this.cart.cartLength);
    
  //   this.batchLength = this.cart.cartLength;
  //   console.log('batchLength',this.batchLength);
    
  // }

  getBooks(){
    this.book.getAllBook().subscribe((response:any)=>{
      console.log(response);
      
    })
  }

  openCart(){
    this.route.navigateByUrl("home/cart");
  }

  openBook(){
    this.route.navigateByUrl("home/allbooks");
  }

  openWhishlist(){
    this.route.navigateByUrl("home/whishlist");
  }

  openOrder(){
    this.route.navigateByUrl("home/allOrder");
  }

  logout(){
    console.log("logged out")
    localStorage.removeItem('token')
    this.route.navigateByUrl("user/login")
    
  }

  searchNote(event:any){
    console.log('event.target.value',event.target.value);
    
    this.dataService.sendMessage(event.target.value);

  }
}
