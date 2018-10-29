import { Component, OnInit,Input } from '@angular/core';
import {item}  from '../api';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item:item;
  constructor() { }

  ngOnInit() {
  }

}
