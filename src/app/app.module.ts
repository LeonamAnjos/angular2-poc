import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { ContainerComponent } from './main/container/container.component';
import { SidebarEmpresaComponent } from './main/sidebar-empresa/sidebar-empresa.component';
import { SidebarMenuPrincipalComponent } from './main/sidebar-menu-principal/sidebar-menu-principal.component';
import { SidebarMenuComponent } from './main/sidebar-menu/sidebar-menu.component';
import { SidebarMenuFavoritosComponent } from './main/sidebar-menu-favoritos/sidebar-menu-favoritos.component';
import {AppRoutingModule, routedComponents} from './app-routing.module';
import {AccountService} from './shared/services/account.service';
import {UsuarioService} from './shared/services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    SidebarEmpresaComponent,
    SidebarMenuPrincipalComponent,
    SidebarMenuComponent,
    SidebarMenuFavoritosComponent,
    routedComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UsuarioService,
    AccountService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
