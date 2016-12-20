import {Usuario} from "../shared/models/usuario";

export class UsuarioFactory {

  static createList(): Usuario[] {
    let usuarios: Usuario[] = [
      { id: 1, nome: 'Bárbara Arenhart' },
      { id: 2, nome: 'Deonise Fachinello' },
      { id: 3, nome: 'Ana Paula Rodrigues Belo' },
      { id: 4, nome: 'Alexandra Nascimento' },
      { id: 5, nome: 'Jéssica Quintino' },
      { id: 6, nome: 'Daniela Piedade' },
      { id: 7, nome: 'Fabiana Diniz' },
    ];

    return usuarios;
  }

}
