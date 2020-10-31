import { Component, OnInit } from '@angular/core';
import { CientificoService } from 'src/app/services/cientifico.service';

@Component({
  selector: 'app-Collaborators',
  templateUrl: './Collaborators.component.html',
  styleUrls: ['./Collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {
  
  thtitles: any[] = [];
  items: any[] = [];

  collaborators: any = {
    thtitles: [],
    items: []
  };


  constructor(private _cientifico: CientificoService) { }

  ngOnInit(): void {
    this._cientifico.getColaboradores().subscribe((res: any) => {
      console.log(res);

      
      this.thtitles = Object.keys(res[0]);
      this.items = res;

      this.collaborators = {
        thtitles: this.thtitles,
        items: this.items
      }
    })

  }

}
