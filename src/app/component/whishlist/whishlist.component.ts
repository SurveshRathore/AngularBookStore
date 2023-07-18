import { Component } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent {

  bookWhishlist: any = [];
  whishListLength: any;
  constructor(private book:BookService){}
  ngOnInit(){
    this.getWishBook();
    
    
  }

  getWishBook(){
    this.book.getAllWhishListBook().subscribe((response:any)=>{
      this.bookWhishlist = response.response;
      console.log(response.response);
      console.log('wishlist',this.bookWhishlist);
      this.whishListLength=this.bookWhishlist.length;
      

    })
  }

  
}
