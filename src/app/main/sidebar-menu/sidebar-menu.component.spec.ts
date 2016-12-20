/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SidebarMenuComponent } from './sidebar-menu.component';
import {SidebarMenuFavoritosComponent} from "../sidebar-menu-favoritos/sidebar-menu-favoritos.component";
import {SidebarMenuPrincipalComponent} from "../sidebar-menu-principal/sidebar-menu-principal.component";

describe('SidebarMenuComponent', () => {
  let component: SidebarMenuComponent;
  let fixture: ComponentFixture<SidebarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMenuComponent, SidebarMenuFavoritosComponent, SidebarMenuPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
