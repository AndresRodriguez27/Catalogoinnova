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
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      link: ['', Validators.required],
      fecha: [Date.now()],
    });
  }

  public crearTarjeta() {
    console.log('nombre ' + this.formNoticia.value.nombre);
    console.log('link ' + this.formNoticia.value.link);
    console.log('descripcion ' + this.formNoticia.value.descripcion);
    this.sercicioNoticia.registroTarjeta(this.formNoticia.value)
    .subscribe(
      (resp) =>  console.log(resp),
      ({ error }) => {
        console.log(error);
      }
    );
  }

}
