import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent {

  constructor(private book:BookService, private route: Router, private dataService:DataService){}
  ngOnInit(){
    this.getBooks();
  }

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
