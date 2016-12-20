import { Component, OnInit } from '@angular/core';
import {ConsultaGridEvents} from './consulta-grid-events';

@Component({
  selector: 'consulta-grid',
  templateUrl: 'consulta-grid.component.html',
  styleUrls: ['consulta-grid.component.css'],
})
export class ConsultaGridComponent implements OnInit {

  showFiltersCard: boolean = true;

  constructor() { }

  ngOnInit() {
    ConsultaGridEvents.toggleShowFiltersEvent.subscribe(() => this.showFiltersCard = !this.showFiltersCard);
  }

  closeFiltersCard() {
    this.showFiltersCard = false;
  }

}
