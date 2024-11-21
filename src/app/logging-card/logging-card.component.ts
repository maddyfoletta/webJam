import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import {CompleteLogCardComponent} from 'src/app/complete-log-card/complete-log-card.component';

@Component({
  selector: 'app-logging-card',
  templateUrl: './logging-card.component.html',
  styleUrls: ['./logging-card.component.scss'],
})
export class LoggingCardComponent  implements OnInit {
  @Input() reps: string = '';
  @Input() weight: string = '';
  formattedDate: string = '';
  showCompleteLogCard: boolean = false;
  showLoggingCard: boolean = true;



  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {}
  @Input() workoutName!: string; // Input for the workout name



  enterClick(){
    console.log(this.reps, this.weight, this.workoutName);
    //sending info to database
    this.firebaseService.writeStuff(this.workoutName, this.reps, this.weight, this.getTime());
    this.showCompleteLogCard = true;
    this.showLoggingCard = false;
    this.reps = '';
    this.weight = '';

    setTimeout(() => {
      this.showCompleteLogCard = false;
    }, 2000); // 3000ms = 3 seconds
    // this.searchQuery = ''; // Clear search input if needed
    // this.filteredWorkouts = this.workouts; // Reset filtered workouts to all workouts

  }
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
