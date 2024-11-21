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

  constructor() {
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
    this.db = getDatabase(this.app);
  }
  
  async getWorkouts(): Promise<any> {
    const dbRef = ref(this.db);
    try {
      const snapshot = await get(child(dbRef, 'exercises/'));
      if (snapshot.exists()) {
        return snapshot.val(); // Return the retrieved data
      } else {
        console.log('No workouts found');
        return {};
      }
    } catch (error) {
      console.error('Error fetching workouts:', error);
      throw error;
    }
  }

  writeStuff(workout: string, reps: string, weight: string, time: string){
    const db = getDatabase();
    set(ref(db, 'dates/' + time + '/' + workout), {rep: reps, weights: weight});
  }
  


  // Optionally, create a method to access Firebase app
  public getApp() {
    return this.app;
  }
}

