import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot}  from '@angular/router';
import {FlickrService}  from './flickr.service';
import {jsonFlickrFeed}  from './api';

@Injectable({
  providedIn:'root'
})
export class FlickrFeedResolver implements Resolve<Promise<jsonFlickrFeed>> {

  constructor(private flickerService:FlickrService) { 
  }

  resolve(route:ActivatedRouteSnapshot,routerState:RouterStateSnapshot):Promise<jsonFlickrFeed>{      
    return this.flickerService.get();
  }
}
