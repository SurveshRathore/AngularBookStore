import { Component } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {

  orderList:any = [];

  constructor(private book: BookService){}
  ngOnInit(){
    this.GetAllTheOrders();
  }

  GetAllTheOrders(){
    this.book.getAllOrder().subscribe((response:any)=>{
      console.log('order',response);
      this.orderList=response.response;
      
    })
  }
}
