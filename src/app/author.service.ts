import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './author.model';



@Injectable()
export class AuthorService {

 authorList : Author[] = [];
 
  constructor(private http: HttpClient) {
  }
  getAuthors(){
    return this.authorList;
  }
  getAuthor(id: any){
    let author: any;
    this.authorList.map(val=>{
      if(val.id == id) author = val;
    });
    return author;
  }
  authorEdit(author:any): Boolean{
    let present: Boolean = false;
    this.authorList.map((val, index)=>{
      if(val.id == author.id) {this.authorList[index] = author;present=true}
    });
    return present;

  }

}

