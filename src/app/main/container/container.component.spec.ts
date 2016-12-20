/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContainerComponent } from './container.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RouterModule, RouterOutletMap} from '@angular/router';
import {SidebarEmpresaComponent} from '../sidebar-empresa/sidebar-empresa.component';
import {SidebarMenuComponent} from '../sidebar-menu/sidebar-menu.component';
import {SidebarMenuFavoritosComponent} from '../sidebar-menu-favoritos/sidebar-menu-favoritos.component';
import {SidebarMenuPrincipalComponent} from '../sidebar-menu-principal/sidebar-menu-principal.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        SidebarComponent,
        SidebarEmpresaComponent,
        SidebarMenuComponent,
        SidebarMenuFavoritosComponent,
        SidebarMenuPrincipalComponent
      ],
      providers: [RouterOutletMap],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
