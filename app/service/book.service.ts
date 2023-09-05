import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token:any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem('token');
   }

  getAllBook(){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.getService('Book/GetAllBooks',true,header)
  }

  addBookToCartAPI(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.postService('Cart/AddBookToCart?bookId='+reqData.bookId+'1&bookQuantity='+reqData.bookQuantity,reqData,true,header)
  }

  addBookToWishListAPI(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.postService('WishList/AddToWishlist?BookId='+reqData.bookId,reqData,true,header)
  }

  getAllCartBook(){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.getService('Cart/GetCartBook',true,header)
  }

  getAllWhishListBook(){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.getService('WishList/GetWishlistDetails',true,header)
  }

  increaseQuantity(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpservice.patchService('Cart/UpdateBookInCart?bookQuantity='+reqData.bookQuantity+'&cartID='+reqData.cartID,reqData,true,header);
  }

  getAllAddress(){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.getService('Address/GetAllAddress',true,header)
  }

  removeBookFromCart(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.deleteService('Cart/DeleteCartBook?cartId='+reqData.cartId,reqData,true,header)
  }

  getAllOrder(){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.getService('Order/GetAllOrder',true,header)
  }

  addOrder(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.postService('Order/PlaceOrder',reqData,true,header)
  }

}
