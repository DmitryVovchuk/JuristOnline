import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropAvatarComponent } from './crop-avatar.component';

describe('CropAvatarComponent', () => {
  let component: CropAvatarComponent;
  let fixture: ComponentFixture<CropAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
