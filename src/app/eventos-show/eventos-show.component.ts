import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit, OnDestroy {
  public eventos:IEvento[]=[
    {
      title: 'Evento de prueba',
      description: 'Nos lo pasaremos genial',
      date: '2021-03-15',
      image: 'assets/evento1.jpg',
      price: 23.95
    }, {
      title: 'Evento de prueba 2',
      description: 'Este es peor',
      date: '2020-08-14',
      image: 'assets/evento2.jpg',
      price: 15.5
    }
  ];
  filtroBusqueda:string="";
  constructor() { }

  newEvento:IEvento={
    title:"",
    description:"",
    image:"",
    price:0,
    date:""
  }

  ngOnInit(): void {
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

  addEvento(){
    this.eventos.push(this.newEvento);

    this.newEvento={
      title:"",
      description:"",
      image:"",
      price:0,
      date:""
    }

  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result.toString();
    });
  }


}
