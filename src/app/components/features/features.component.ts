import { Component, OnInit } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons'
import {features} from '../../entities/features';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  features = features;
  icons = icons;

  constructor() { }

  ngOnInit(): void {
  }

}
