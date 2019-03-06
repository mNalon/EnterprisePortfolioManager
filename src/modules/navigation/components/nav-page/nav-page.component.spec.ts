import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { NavPageComponent } from './nav-page.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('NavPageComponent', () => {
    let component: NavPageComponent;
    let fixture: ComponentFixture<NavPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
              RouterModule.forRoot([]),
              NgbModule
            ],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
            declarations: [NavPageComponent, NavBarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavPageComponent);
        component = fixture.componentInstance;
        component.user = {
            _id: 123,
            name: 'bla',
            userName: 'bla',
            email: 'bla@bla.com',
            role: { _id: 123, name: 'bla', actions: [{ _id: 123, name: 'bla', slug: 'bla' }] }
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
