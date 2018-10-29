import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import {RouterModule}  from '@angular/router';
import {FormsModule}  from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FlickrService}  from './flickr.service';
import  {FlickrFeedResolver}  from './flicker.feed.resolver';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import {appRoutes}  from './app.routes';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    ItemsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:false})
  ],
  providers: [FlickrService,FlickrFeedResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
