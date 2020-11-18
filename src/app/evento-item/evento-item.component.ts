import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() eventoHijo:IEvento;

  @Output() borrame = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteEvento(){
    this.borrame.emit();
  }
}
