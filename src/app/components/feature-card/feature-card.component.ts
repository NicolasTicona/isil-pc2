import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
    console.log('Hola')
    console.log(this.data);
  }

}
