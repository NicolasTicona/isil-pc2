import { Component, OnInit } from '@angular/core';
import {thtitles, items} from '../../entities/prices';

@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent implements OnInit {

  prices = {
    thtitles, items
  }

  constructor() { }

  ngOnInit(): void {
  }

}
