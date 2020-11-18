import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit, OnDestroy {
  public eventos:IEvento[]=[];
  filtroBusqueda:string="";
  constructor(private eventosService:EventoService) { }



  ngOnInit(): void {
    this.eventos=this.eventosService.getEventos();
  }

  ngOnDestroy(): void {
  }

  orderDate(){
    this.filtroBusqueda = '';
    this.eventos.sort((evento1, evento2) =>
    evento1.date < evento2.date ? -1 : 1);
   // evento1.date.localeCompare(evento2.date));

  }

  orderPrice(){
    this.filtroBusqueda = '';
    this.eventos.sort((evento1, evento2) =>
    evento1.price < evento2.price ? -1 : 1);
  }

  eliminarEvento(evento: IEvento){
    this.eventos=this.eventos.filter(e => e!=evento);
  }

  insertarEvento(evento: IEvento){
    this.eventos.push(evento);
  }



}
