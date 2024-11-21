import { Injectable } from '@angular/core';
// Import the functions you need from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, DatabaseReference, set } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmRtfoMxkAHhaCiJ644eldJytjF0_bYrI',
  authDomain: 'gymapp-843ef.firebaseapp.com',
  databaseURL: 'https://gymapp-843ef-default-rtdb.firebaseio.com',
  projectId: 'gymapp-843ef',
  storageBucket: 'gymapp-843ef.firebasestorage.app',
  messagingSenderId: '67397034834',
  appId: '1:67397034834:web:add9002b4fdd70c7e8908b',
  measurementId: 'G-3LS2CKNJ50'
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app;
  private db: any;
  formattedDate: string = '';

  constructor() {
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
    this.db = getDatabase(this.app);
  }

  async getWorkouts(): Promise<any> {
    const dbRef = ref(getDatabase());
    try {
      const snapshot = await get(child(dbRef, 'dates/'));  // Await the Firebase data
      if (snapshot.exists()) {
        const data = snapshot.val();
        // console.log('Fetched data:', data);  // Log the data for debugging
        return data;
      } else {
        console.log('No data available');
        return [];
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;  // Ensure errors are propagated for further handling
    }
  }

  //11-20-2024
  async createWorkoutObject(){
    const dbRef = ref(getDatabase());

  }

  writeStuff(workout: string, reps: string, weight: string, time: string){
    const db = getDatabase();
    set(ref(db, 'dates/' + time + '/' + workout), {rep: reps, weights: weight});
  }



  // Optionally, create a method to access Firebase app
  public getApp() {
    return this.app;
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

