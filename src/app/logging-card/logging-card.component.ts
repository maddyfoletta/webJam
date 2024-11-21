import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-logging-card',
  templateUrl: './logging-card.component.html',
  styleUrls: ['./logging-card.component.scss'],
})
export class LoggingCardComponent  implements OnInit {
  @Input() reps: string = '';
  @Input() weight: string = '';
  formattedDate: string = '';


  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {}
  @Input() workoutName!: string; // Input for the workout name

  enterClick(){
    console.log(this.reps, this.weight, this.workoutName);
    //sending info to database
    this.firebaseService.writeStuff(this.workoutName, this.reps, this.weight, this.getTime());
    //FUNCTIONALITY HERE TO DO SOMETING WHEN YOU LOG MAYBE SAY SOMETHING LIKE "LOGGING DONE"
  }
  //bench press : {date: 11-20-2024, reps: 15, weight: 200}

  getTime(): string {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');  // Get month (0-indexed, so add 1)
    const day = String(today.getDate()).padStart(2, '0');  // Get day
    const year = today.getFullYear();  // Get year

    this.formattedDate = `${month}-${day}-${year}`;  // Format as MM-DD-YYYY
    console.log(this.formattedDate);  // Outputs the formatted date to the console
    return this.formattedDate;
  }

}
