import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: string) {
    if(args == 'All Books'){
      return value;
    }
    else{
      args= args.toLowerCase();
    }
    return value.filter((book:any)=>{
      return(
        book.bookName.toLowerCase().includes(args) |
        book.authorName.toLowerCase().includes(args)
      );
    });
  }

}
