import { Component, OnInit } from '@angular/core';
import {ConsultaGridEvents} from '../../../shared/components/consulta/consulta-grid-events';

@Component({
  selector: 'produtos-consulta-operadoras',
  templateUrl: 'consulta-operadoras.component.html',
  styleUrls: ['consulta-operadoras.component.css']
})
export class ConsultaOperadorasComponent implements OnInit {

  showFilterCard: boolean = true;

  constructor() { }

  ngOnInit() {}

  toggleFilterCard() {
    this.showFilterCard = !this.showFilterCard;
    ConsultaGridEvents.toggleShowFiltersEvent.emit(this.showFilterCard);
  }

}
