import { Component, OnInit } from '@angular/core';
import { CientificoService } from '../../services/cientifico.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private _cientifco: CientificoService) { }

  ngOnInit(): void {
    this._cientifco.getCategorias().subscribe(res => {
      console.log(res);
    })
    // this._cientifco.getPlanes().subscribe(res => {
    //   console.log(res);
    // })
  }

}
