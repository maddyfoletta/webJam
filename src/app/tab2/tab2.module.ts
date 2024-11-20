import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { SearchBarWorkoutsComponent } from '../search-bar-workouts/search-bar-workouts.component';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { LoggingCardComponent } from '../logging-card/logging-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, SearchBarWorkoutsComponent, LoggingCardComponent]
})
export class Tab2PageModule {}
