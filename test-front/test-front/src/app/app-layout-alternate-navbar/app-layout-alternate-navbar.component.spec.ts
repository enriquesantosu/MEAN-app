import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutAlternateNavbarComponent } from './app-layout-alternate-navbar.component';

describe('AppLayoutAlternateNavbarComponent', () => {
  let component: AppLayoutAlternateNavbarComponent;
  let fixture: ComponentFixture<AppLayoutAlternateNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLayoutAlternateNavbarComponent]
    });
    fixture = TestBed.createComponent(AppLayoutAlternateNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
