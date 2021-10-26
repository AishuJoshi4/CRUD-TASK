import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorViewComponent } from './author-view/author-view.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorViewComponent,
    PageNotFoundComponentComponent,
    AuthorAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
