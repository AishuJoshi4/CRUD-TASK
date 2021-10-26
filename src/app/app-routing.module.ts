import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorViewComponent } from './author-view/author-view.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: 'author-add', component: AuthorAddComponent },
  { path: 'author/:id',      component: AuthorViewComponent },
  {
    path: 'authors',
    component: AuthorListComponent
  },
  { path: 'author-add/:id', component: AuthorAddComponent },
  {
    path: 'authors',
    component: AuthorListComponent
  },
  { path: '',
    redirectTo: '/authors',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
