import { Injectable } from '@angular/core';
// Import the functions you need from Firebase SDK
import { initializeApp } from 'firebase/app';

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

  constructor() {
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
  }

  // Optionally, create a method to access Firebase app
  public getApp() {
    return this.app;
  }
}
