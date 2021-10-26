import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styles: [ `input{width:100%;padding: 10px 15px;margin:5px auto;}` ]
  // styleUrls: ['./author-add.component.scss']
})
export class AuthorAddComponent implements OnInit {
  authorForm!: FormGroup;
  isEdit: Boolean = false;
  msg:String = '';
  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authorForm = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
      address: new FormControl(''),
      price: new FormControl(''),
    })
      this.route.params.subscribe(param => {
        console.log(param)
        if(param && param.id){
          let auther = this.authorService.getAuthor(param.id);
          if(auther){
            this.authorForm?.setValue(auther);
            this.isEdit = true;
            }
          else this.router.navigate(['/authors'])
        }
      })
  }

  resetForm(){
    console.log('reset',this.authorForm)
    this.authorForm?.reset();
  }

  add(){
    if(this.authorForm?.valid){
      this.authorService.authorList.push(this.authorForm?.value);
      this.resetForm();
      console.log('this.authorService.authorLost',this.authorService.getAuthors())}
      else {
      this.msg = 'Please complete form'
    }
  }

  edit(){
    this.msg = '';
    if(this.authorForm?.valid){
      if(this.authorService.authorEdit(this.authorForm?.value)){
        this.router.navigate(['/authors'])
      }else {
        this.msg = 'Something went wrong'
      }
    }else {
      this.msg = 'Please complete form'
    }
  }

}
