import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDescriptionComponent } from './footer-description.component';

describe('FooterDescriptionComponent', () => {
  let component: FooterDescriptionComponent;
  let fixture: ComponentFixture<FooterDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
