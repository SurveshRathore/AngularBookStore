import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl="https://localhost:5991/BookStore/";
  constructor(private httpClient:HttpClient) { }

  postService(url:string,reqData:any,token:boolean,httpOptions:any)
  {
    console.log('post');
    
    return this.httpClient.post(
      this.baseurl+url,
      reqData,
      token && httpOptions
      )
  }

  // postServiceReset(url:string,reqData:any,token:boolean=true,httpOptions:any={})
  // {
  //   return this.httpClient.post(this.baseurl+url,reqData,token && httpOptions)
  // }

  putService(url:string,reqData:any,token:boolean=true,httpOptions:any={})
  {
    return this.httpClient.put(this.baseurl+url,reqData,token && httpOptions)
  }

  getService(url:string,token:boolean=true,httpOptions:any={})
  {
    return this.httpClient.get(
      this.baseurl+url,
      token && httpOptions
      )
  }

  deleteService(url:string,reqData:any,token:boolean=true,httpOptions:any={})
  {
    return this.httpClient.delete(this.baseurl+url,token && httpOptions)
  }
}
