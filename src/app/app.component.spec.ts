/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './main/navbar/navbar.component';
import {ContainerComponent} from './main/container/container.component';
import {SidebarComponent} from './main/sidebar/sidebar.component';
import {RouterOutlet, RouterOutletMap, RouterModule} from '@angular/router';
import {SidebarEmpresaComponent} from './main/sidebar-empresa/sidebar-empresa.component';
import {SidebarMenuComponent} from './main/sidebar-menu/sidebar-menu.component';
import {SidebarMenuFavoritosComponent} from './main/sidebar-menu-favoritos/sidebar-menu-favoritos.component';
import {SidebarMenuPrincipalComponent} from './main/sidebar-menu-principal/sidebar-menu-principal.component';
import {AccountService} from './shared/services/account.service';
import {UsuarioService} from './shared/services/usuario.service';

describe('App: WebstormAngularCli', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        ContainerComponent,
        SidebarComponent,
        SidebarEmpresaComponent,
        SidebarMenuComponent,
        SidebarMenuFavoritosComponent,
        SidebarMenuPrincipalComponent
      ],
      providers: [
        RouterOutletMap,
        AccountService,
        UsuarioService],
      imports: [RouterModule]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
