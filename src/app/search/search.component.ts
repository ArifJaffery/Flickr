import { Component, OnInit } from '@angular/core';
import {FlickrService}  from '../flickr.service';
import {jsonFlickrFeed}  from '../api';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private flickrService:FlickrService) { }

  ngOnInit() {
  }

  searchHandler=()=>{
    const searchText:string = this.flickrService.searchtext;
    if (searchText == undefined ) return;
    this.flickrService.get()
                      .then(
                        resp=>{
                          const feed:jsonFlickrFeed = resp;
                          this.flickrService.data.items = feed.items
                                .filter(item=>{
                                          if (searchText.length==0) 
                                            return true;
                                          return item.tags
                                                  .search(searchText)!=-1;     
                                  });
                                },
                          error=>error
                        )
                      .catch(
                        error=>error
                      );      
  }
}
