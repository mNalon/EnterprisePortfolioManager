import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPageComponent } from './nav-page.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

describe('NavPageComponent', () => {
  let component: NavPageComponent;
  let fixture: ComponentFixture<NavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPageComponent, NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});