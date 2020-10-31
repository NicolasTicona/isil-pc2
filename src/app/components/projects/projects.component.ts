import { Component, OnInit } from '@angular/core';
import { CientificoService } from 'src/app/services/cientifico.service';
import { projects } from '../../entities/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = projects;
  materias: any[];
  categorias: any[];

  categoriaSelected: string = "";


  constructor(private _cientifico: CientificoService) { }

  ngOnInit(): void {
    this.getMaterias();
    this.getCategorias();
  }

  getMaterias(){
    this._cientifico.getMaterias().subscribe((res: any) => {
      this.materias = res;
    })
  }

  getCategorias(){
    this._cientifico.getCategorias().subscribe((res: any) => {
      this.categorias = res;
    })
  }

  getMateriaPorCategoria(categoria){

    this.categoriaSelected = categoria.categoria_id;

    this._cientifico.getMateria(categoria.categoria_id).subscribe((res: any) => {
      res.map(r => {
        r.categoria = categoria.nombre;
      })
      this.materias = [...res];
    })
  }
}
