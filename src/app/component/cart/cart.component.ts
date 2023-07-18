import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  bookCart: any = [];
  cartLength: any;
  bookQuantity: any;
  constructor(private book:BookService, private route:Router){}
  ngOnInit(){
    this.getCartBook();
    console.log(this.bookCart.length);
    
  }

  getCartBook(){
    this.book.getAllCartBook().subscribe((response:any)=>{
      this.bookCart = response.response;
      console.log(response.response);
      console.log('bookCart',this.bookCart);
      this.cartLength=this.bookCart.length;
      

    })
  }

  incrementQuantity(cartId: any, quantity: any){
    this.bookQuantity = quantity+1;
    
  }

  decrementQuantity(cartId: any, quantity: any){
    this.bookQuantity = quantity-1;
    
  }

  RemoveFromCart(cartId:any){
    
  }

  addOrder(){

  }

  placeOrder(){
    this.route.navigateByUrl('home/order')
  }
  
}
