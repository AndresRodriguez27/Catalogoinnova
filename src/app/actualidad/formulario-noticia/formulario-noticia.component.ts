
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoticiasService } from 'src/app/shared/noticias.service';

@Component({
  selector: 'app-formulario-noticia',
  templateUrl: './formulario-noticia.component.html',
  styleUrls: ['./formulario-noticia.component.css']
})
export class FormularioNoticiaComponent implements OnInit {

  public formNoticia: FormGroup;

  constructor(
    protected sercicioNoticia: NoticiasService,
    protected fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formNoticia = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      linkNoticia: ['', Validators.required],
      fechaCreacion: ['2021-12-14'],
      foto: ['aqui va una foto'],
    });
  }

  public crearTarjeta() {
   console.log(this.formNoticia.value.titulo)
   console.log(this.formNoticia.value.descripcion)
   console.log(this.formNoticia.value.linkNoticia)
   
   console.log(this.formNoticia.value.foto)
   
   
    this.sercicioNoticia.registroTarjeta(this.formNoticia.value)
    .subscribe(
      (resp) => { 
        console.log('pase')
        console.log(resp) },
      ({ error }) => {
        console.log(error);
      }
    );
  }

}
