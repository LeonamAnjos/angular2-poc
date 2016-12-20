import { Injectable } from '@angular/core';
import {Usuario} from "../models/usuario";
import {UsuarioFactory} from "../../fixtures/UsuarioFactory";

@Injectable()
export class UsuarioService {

  private profileImagesPath: String = 'assets/images/profiles/';
  private profileImagesExtension: String = '.jpg';

  constructor() { }

  getImagemUsuario(usuario?: Usuario): String {
    let imageName = usuario ? usuario.id : '0';
    return `${this.profileImagesPath}${imageName}${this.profileImagesExtension}`;
  }

  getUsuarios(): Usuario[] {
    return UsuarioFactory.createList();
  }
}
