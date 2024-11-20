import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logging-card',
  templateUrl: './logging-card.component.html',
  styleUrls: ['./logging-card.component.scss'],
})
export class LoggingCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() workoutName!: string; // Input for the workout name

}
