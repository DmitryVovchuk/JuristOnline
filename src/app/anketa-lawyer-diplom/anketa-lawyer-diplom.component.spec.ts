import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketaLawyerDiplomComponent } from './anketa-lawyer-diplom.component';

describe('AnketaLawyerDiplomComponent', () => {
  let component: AnketaLawyerDiplomComponent;
  let fixture: ComponentFixture<AnketaLawyerDiplomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketaLawyerDiplomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketaLawyerDiplomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
