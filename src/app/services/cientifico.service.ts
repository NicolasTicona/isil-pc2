import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { pipe } from 'rxjs' 


@Injectable({
  providedIn: 'root'
})
export class CientificoService {
  planes = [];
  colaboradores = [];
  categorias = [];
  materias = [];

  constructor(private http: HttpClient) { }

  getPlanes(){
    const ruta = "http://localhost/servicioangular/planes.php";

    return this.http.get(ruta, {})
  }
  
  getColaboradores(){
    const ruta = "http://localhost/servicioangular/colaboradores.php";

    return this.http.get(ruta)
  }

  getCategorias(){
    const ruta = "http://localhost/servicioangular/categoria.php";

    const h = new HttpHeaders({
      
    });
    return this.http.get(ruta)
  }

  getMaterias(){
    const ruta = "http://localhost/servicioangular/materia.php";

    const h = new HttpHeaders({
      
    });
    return this.http.get(ruta)
  }

  getMateria(idCategoria){
    const ruta = "http://localhost/servicioangular/materiaxcategoria.php";

    const params = new HttpParams().set("idCategoria", idCategoria);

    return this.http.get(ruta, {params});
  }
}
