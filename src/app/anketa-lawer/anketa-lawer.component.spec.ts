import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketaLawerComponent } from './anketa-lawer.component';

describe('AnketaLawerComponent', () => {
  let component: AnketaLawerComponent;
  let fixture: ComponentFixture<AnketaLawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketaLawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketaLawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
