import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBarWorkoutsComponent } from './search-bar-workouts.component';

describe('SearchBarWorkoutsComponent', () => {
  let component: SearchBarWorkoutsComponent;
  let fixture: ComponentFixture<SearchBarWorkoutsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarWorkoutsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
