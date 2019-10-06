import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './ErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
