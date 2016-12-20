import { Component, OnInit } from '@angular/core';

import {profileMenuOptions} from "./menu-profile";
import {accountMenuOptions} from "./menu-account";
import {Usuario} from "../../shared/models/usuario";
import {AccountService} from "../../shared/services/account.service";
import {UsuarioService} from "../../shared/services/usuario.service";

@Component({
  selector: 'produtos-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioCorrente: Usuario;
  profileMenu = profileMenuOptions;
  accountMenu = accountMenuOptions;

  constructor(private accountService: AccountService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioCorrente = this.accountService.getUsuarioLogado();
  }

  getProfileImage(): String {
    return this.usuarioService.getImagemUsuario(this.usuarioCorrente);
  }

}
