import { Component, OnInit } from '@angular/core';
import {ConsultaGridEvents} from '../../../shared/components/consulta/consulta-grid-events';


export class Filter {
  constructor(
    public name: string,
    public contractType: string
  ) {  }
}

@Component({
  selector: 'produtos-consulta-produtos',
  templateUrl: 'consulta-produtos.component.html',
  styleUrls: ['consulta-produtos.component.css']
})
export class ConsultaProdutosComponent implements OnInit {

  filter = {name: '', contractType: ''};
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShowFiltersCard() {
    ConsultaGridEvents.toggleShowFiltersEvent.emit();
  }

  onSubmit() { this.submitted = true; }

  pesquisar() {}

  get diagnostic() {
    let bha = JSON.stringify(this.filter)
    console.log(bha + ' - ' + this.submitted);
    return bha; }

}

