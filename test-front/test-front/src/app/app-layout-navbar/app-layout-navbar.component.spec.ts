import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutNavbarComponent } from './app-layout-navbar.component';

describe('AppLayoutNavbarComponent', () => {
  let component: AppLayoutNavbarComponent;
  let fixture: ComponentFixture<AppLayoutNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLayoutNavbarComponent]
    });
    fixture = TestBed.createComponent(AppLayoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
