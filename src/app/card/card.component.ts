import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input() exercise: string = '';
  @Input() weight: any = 0;
  @Input() date: string = '';
  constructor() { }


  ngOnInit(){}



}

