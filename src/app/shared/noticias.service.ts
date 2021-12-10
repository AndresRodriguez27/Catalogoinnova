import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { environment } from 'src/environments/environment';
import { Tarjeta } from './model/Tarjeta';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(protected http: HttpService) { }

  public registroTarjeta(tarjeta: Tarjeta) {
    return this.http.doPost<Tarjeta, any>(
      `${environment.endPoint}/api/tarjetas`,
      tarjeta,
      this.http.optsName(' Login ')
    );
  }
}
