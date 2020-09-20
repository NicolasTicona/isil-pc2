import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {

  @Input() data;
  @Input() contrast = false;
  @Input() isPhoto = false;

  constructor() { }

  ngOnInit(): void {
  }

  getKeys(item){
    return Object.keys(item);
  }

}
