import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  bookCart: any = [];
  addressList: any = [];
  cartLength: any;

  fullName: any;
  mobileNumber: any;
  Address: any;
  city: any;
  Userstate: any;
  addressType:any;
  
  constructor(private book:BookService, private route:Router,private snack:MatSnackBar){}
  ngOnInit(){
    this.getCartBook();
    console.log(this.bookCart.length);
    this.getAllUserAddress();
    
  }

  getCartBook(){
    this.book.getAllCartBook().subscribe((response:any)=>{
      this.bookCart = response.response;
      console.log(response.response);
      console.log('bookCart',this.bookCart);
      this.cartLength=this.bookCart.length;
      localStorage.setItem('cartValue',this.bookCart.length);

    })
  }

  incrementQuantity(cartId: any, quantity: any){
    let payload={
      cartID: cartId,
      bookQuantity: quantity+1
    }
    this.book.increaseQuantity(payload).subscribe((response:any)=>{
      console.log(response);
      this.getCartBook();
  });
    
  }

  decrementQuantity(cartId: any, quantity: any){
    let payload={
      cartID: cartId,
      bookQuantity: quantity-1
    }
    this.book.increaseQuantity(payload).subscribe((response:any)=>{
      console.log(response);
      this.getCartBook();
  });
    
  }

  RemoveFromCart(cartId:any){
    let payload={
      cartId: cartId
    }
    this.book.removeBookFromCart(payload).subscribe((response:any)=>{
      console.log(response);
      this.snack.open('book removed from cart','',{duration:2000});
      this.getCartBook();
  });
}
addOrder(){}

placeOrder( ){
    let payload = {
      addressID: 1,
      cartID: this.bookCart.cartid
    }
    this.book.addOrder(payload).subscribe((response:any)=>{
      console.log(response);
      this.route.navigateByUrl('home/order')
    })
  }

  getAllUserAddress(){
    this.book.getAllAddress().subscribe((response:any)=>{
      console.log('address',response.response);
      this.addressList= response.response;
      
    })
  }

  addNewAddress(){
    this.fullName= '';
    this.mobileNumber = '';
    this.Address = '';
    this.city = '';
    this.Userstate = '';
    this.addressType = '';
  
  }
  
}
