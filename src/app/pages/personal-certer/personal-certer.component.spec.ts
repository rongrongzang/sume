import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCerterComponent } from './personal-certer.component';

describe('PersonalCerterComponent', () => {
  let component: PersonalCerterComponent;
  let fixture: ComponentFixture<PersonalCerterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCerterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCerterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
