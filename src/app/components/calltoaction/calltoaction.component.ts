import { Component, OnInit } from '@angular/core';
import { CientificoService } from 'src/app/services/cientifico.service';

@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent implements OnInit {

  thtitles: any[] = [];
  items: any[] = [];

  prices: any = {
    thtitles: [],
    items: []
  };

  constructor(private _cientico: CientificoService) { }

  ngOnInit(): void {
    this._cientico.getPlanes().subscribe((res: any) => {
      console.log(res);

      this.thtitles = Object.keys(res[0]);
      this.items = res;

      this.prices = {
        thtitles: this.thtitles,
        items: this.items
      }

    })
  }

}
