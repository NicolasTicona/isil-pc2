import { Component, OnInit } from '@angular/core';
import {thtitles, items} from '../../entities/collaborators';

@Component({
  selector: 'app-Collaborators',
  templateUrl: './Collaborators.component.html',
  styleUrls: ['./Collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {

  collaborators = {
    thtitles, items
  }

  constructor() { }

  ngOnInit(): void {
  }

}
