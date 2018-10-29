import { Component, OnInit,Input } from '@angular/core';
import {FlickrService} from '../flickr.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private flickerService:FlickrService) { 
    
  }
  
  ngOnInit() {
  }

}
