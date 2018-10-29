import {Injectable } from '@angular/core';
import {flickrAppState,jsonFlickrFeed}  from './api';
import {HttpClient} from '@angular/common/http';
import {environment}  from '../environments/environment';

@Injectable({
  providedIn:'root'
})
export class FlickrService  {
  state:flickrAppState;
  data:jsonFlickrFeed;
  searchtext:string;

  constructor(private http:HttpClient) { 
    this.state = {
      title:'Flickr Web App',
      copyright: 'Copyright Flickr corporation ',
      pagesize:12
    }
  }
  get():Promise<jsonFlickrFeed>{
      return this.http.get<jsonFlickrFeed>(environment.apiUrl).toPromise();
  }

  getFeed():jsonFlickrFeed{
    return this.data;
  }
  }