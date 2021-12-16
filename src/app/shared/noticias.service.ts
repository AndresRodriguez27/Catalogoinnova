import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { Tarjeta } from './model/Tarjeta';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(protected http: HttpService) { }

  public registroTarjeta(tarjeta: Tarjeta) {
    return this.http.doPost<Tarjeta, any>(
      `https://innova-ufps-api.herokuapp.com/noticias`,
      tarjeta,
      this.http.optsName(' Login ')
    );
  }

  public list() {
    return this.http.doGet<Tarjeta[]>(
      `https://innova-ufps-api.herokuapp.com/noticias`,
      this.http.optsName(' Lista ')
    );
  }
}
