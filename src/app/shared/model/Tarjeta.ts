

export class Tarjeta {
  id: number;
  titulo: string;
  fechaCreacion: string;
  linkNoticia: string;
  descripcion: string;
  foto: string;

  constructor(
    id: number,
    titulo: string,
    fechaCreacion: string,
    linkNoticia: string,
    descripcion: string,
    foto: string
  ) {
    this.titulo = titulo;
    this.linkNoticia = linkNoticia;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.id = id;
    this.foto = foto;
  }
}
