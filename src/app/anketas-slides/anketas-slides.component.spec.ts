import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketasSlidesComponent } from './anketas-slides.component';

describe('AnketasSlidesComponent', () => {
  let component: AnketasSlidesComponent;
  let fixture: ComponentFixture<AnketasSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketasSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketasSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
