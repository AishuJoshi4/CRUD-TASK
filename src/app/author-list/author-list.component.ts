import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authorList?: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorList = this.authorService?.getAuthors();
  }


  deleteAuthor(element: any) {
    this.authorList?.forEach((x: any, index) => {
      if (x.id == element) this.authorList?.splice(index, 1);
    });
  }
}
