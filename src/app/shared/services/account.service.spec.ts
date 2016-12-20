/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountService } from './account.service';
import {UsuarioService} from './usuario.service';

describe('Service: Account', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService, UsuarioService]
    });
  });

  it('should ...', inject([AccountService, UsuarioService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
