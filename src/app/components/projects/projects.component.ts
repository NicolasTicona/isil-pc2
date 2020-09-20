import { Component, OnInit } from '@angular/core';
import { projects } from '../../entities/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
