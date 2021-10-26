import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.scss']
})
export class AuthorViewComponent implements OnInit {
  author?: Author;
  constructor(private authorService: AuthorService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      console.log(param)
      if(param){
        this.author = this.authorService.getAuthor(param.id);
      }
    })
  }

}
