import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {
  public eventos:IEvento[]=[];


  constructor() { }

  ngOnInit(): void {
  }

}
