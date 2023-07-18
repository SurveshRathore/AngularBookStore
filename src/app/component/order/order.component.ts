import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  constructor(private route:Router) { }
  
  placeOrder(){
    this.route.navigateByUrl('home/order')
  }
}
