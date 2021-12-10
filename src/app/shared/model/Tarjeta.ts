export class Tarjeta {
  titulo: string;
  actualidad: string;
  url: string;
  empresa: number;
  descripcion: string;

  constructor(
    titulo: string,
    actualidad: string,
    url: string,
    empresa: number,
    descripcion: string
  ) {
    this.titulo = titulo;
    this.actualidad = actualidad;
    this.url = url;
    this.empresa = empresa;
    this.descripcion = descripcion;
  }
}
