import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  @Output() insertame = new EventEmitter<IEvento>();

  newEvento:IEvento={
    title:"",
    description:"",
    image:"",
    price:0,
    date:""
  }


  constructor() { }

  ngOnInit(): void {
  }

  addEvento(){
    //this.eventos.push(this.newEvento);
    this.insertame.emit(this.newEvento);
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
