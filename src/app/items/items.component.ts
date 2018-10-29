import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FlickrService}  from '../flickr.service';
@Component({
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit  {
  rows:number[];
  constructor(private route: ActivatedRoute, private flickrService:FlickrService) {
  }

  ngOnInit() {
    this.route.data.subscribe( (resp) => {
      this.flickrService.data = resp['flicker'];
      this.rows=[];
      const searchText:string = this.flickrService.searchtext; 

      for (var i=0; i< this.flickrService.getFeed().items.length / this.flickrService.state.pagesize  ;i++ ){
        this.rows.push(i);
      }
      console.log(this.flickrService.getFeed());
    });
  } 

  getItems=(rownum:number)=>{   
    if (this.flickrService.getFeed() == undefined){
        return [];
    }
    else{      
      const start:number = rownum * this.flickrService.state.pagesize;
      const end:number = start + this.flickrService.state.pagesize+1;     
      return this.flickrService.getFeed().items.slice( start,end);
    }
  } 

}
