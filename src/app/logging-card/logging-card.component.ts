import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logging-card',
  templateUrl: './logging-card.component.html',
  styleUrls: ['./logging-card.component.scss'],
})
export class LoggingCardComponent  implements OnInit {
  @Input() reps: string = '';
  @Input() weight: string = '';
  formattedDate: string = '';
  showLoggingCard: boolean = true;
  alertButtons = ['Action'];



  constructor(private firebaseService: FirebaseService,
    private alertController: AlertController) { }

  ngOnInit() {}
  @Input() workoutName!: string; // Input for the workout name



  async enterClick(){
    console.log(this.reps, this.weight, this.workoutName);
    //sending info to database
    this.firebaseService.writeStuff(this.workoutName, this.reps, this.weight, this.getTime());
    this.showLoggingCard = false;
    this.reps = '';
    this.weight = '';
    await this.showLogCompleteAlert();
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

  async showLogCompleteAlert() {
    const alert = await this.alertController.create({
      header: 'Log Complete!',
      message: `Your log for ${this.workoutName} has been saved successfully.`,
      buttons: ['OK'], // Single button to dismiss the alert
    });

    await alert.present(); // Show the alert
  }

  //DELETE IF
  ngOnChanges(changes: SimpleChanges) {
    if (changes['workoutName']) {
      this.showLoggingCard = true; // Reset the logging card when a new workout is selected
    }
  }

}
