import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVarFieldDialogComponent } from './client-var-field-dialog.component';

describe('ClientVarFieldDialogComponent', () => {
  let component: ClientVarFieldDialogComponent;
  let fixture: ComponentFixture<ClientVarFieldDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientVarFieldDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientVarFieldDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
