import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfLoginModalComponent } from './if-login-modal.component';

describe('IfLoginModalComponent', () => {
  let component: IfLoginModalComponent;
  let fixture: ComponentFixture<IfLoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfLoginModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
