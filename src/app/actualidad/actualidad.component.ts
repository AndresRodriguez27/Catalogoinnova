import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from '../shared/model/Tarjeta';
import { NoticiasService } from '../shared/noticias.service';

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']
})
export class ActualidadComponent implements OnInit {

  public listaDocentes: Observable<Tarjeta[]>;

  constructor( protected sercicioNoticia: NoticiasService) { }

  ngOnInit(): void {
    this.listaDocentes = this.sercicioNoticia.list();
    this.listaDocentes.subscribe();
    console.log(this.listaDocentes);
  }




}
