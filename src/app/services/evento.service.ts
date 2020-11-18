import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvento } from '../interfaces/i-evento';
import { map } from 'rxjs/operators'
import { EventoResponse, EventosResponse } from '../interfaces/respuestas';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private eventoURL:string="http://curso.i234.me:8080/eventos"
  constructor(private http:HttpClient) { }

  /*getEventos(): Observable <IEvento[]>{
    return this.http.get<EventosResponse>(this.eventoURL).pipe(
      map(res=>res.eventos)
    );
  }*/
  getEventos(): Observable <EventosResponse>{
    return this.http.get<EventosResponse>(this.eventoURL);
  }

  addEvento(evento: IEvento):Observable<EventoResponse>{
    return this.http.post<EventoResponse>(this.eventoURL,evento);
  }

  deleteEvento(idEvento: number):Observable<EventoResponse>{
    return this.http.delete<EventoResponse>(this.eventoURL+"/"+idEvento);
  }


}
