import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBoxsComponent } from './side-boxs.component';

describe('SideBoxsComponent', () => {
  let component: SideBoxsComponent;
  let fixture: ComponentFixture<SideBoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBoxsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
