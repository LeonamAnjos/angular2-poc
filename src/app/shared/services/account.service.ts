import { Injectable } from '@angular/core';

import {Usuario} from "../models/usuario";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class AccountService {
  private usuarioLogado: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  getUsuarioLogado(): Usuario {
    if (this.usuarioLogado) {
      return this.usuarioLogado;
    }

    let usuarios = this.usuarioService.getUsuarios();
    let idx = Math.floor(Math.random() * (usuarios.length))

    this.usuarioLogado = usuarios[idx];
    return this.usuarioLogado;
  }



}
