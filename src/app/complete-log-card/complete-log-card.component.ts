import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-log-card',
  templateUrl: './complete-log-card.component.html',
  styleUrls: ['./complete-log-card.component.scss'],
})
export class CompleteLogCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  showCompleteLogCard: boolean = false; // Controls visibility of the card
  reps: number | null = null; // Stores the reps
  weight: number | null = null; // Stores the weight
  workoutName: string = ''; // Name of the workout

}
