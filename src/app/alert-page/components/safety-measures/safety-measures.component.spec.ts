import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SafetyMeasuresComponent } from './safety-measures.component';

describe('SafetyMeasuresComponent', () => {
  let component: SafetyMeasuresComponent;
  let fixture: ComponentFixture<SafetyMeasuresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyMeasuresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SafetyMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
