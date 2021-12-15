import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnketaComponent } from './edit-anketa.component';

describe('EditAnketaComponent', () => {
  let component: EditAnketaComponent;
  let fixture: ComponentFixture<EditAnketaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnketaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
