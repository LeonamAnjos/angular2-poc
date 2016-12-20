"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var broadcast_events_service_1 = require('../../services/broadcast-events.service');
var ConsultaGridComponent = (function () {
    function ConsultaGridComponent() {
        this.showFilterCard = true;
    }
    ConsultaGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        broadcast_events_service_1.BradcastEvents.toggleShowFiltersEvent.subscribe(function () { return _this.showFilterCard = !_this.showFilterCard; });
    };
    ConsultaGridComponent.prototype.closeFilterCard = function () {
        this.showFilterCard = false;
    };
    ConsultaGridComponent.prototype.toggleShowFiltersCard = function () {
        broadcast_events_service_1.BradcastEvents.toggleShowFiltersEvent.emit();
    };
    ConsultaGridComponent = __decorate([
        core_1.Component({
            selector: 'consulta-grid',
            templateUrl: 'consulta-grid.component.html',
            styleUrls: ['consulta-grid.component.css'],
        })
    ], ConsultaGridComponent);
    return ConsultaGridComponent;
}());
exports.ConsultaGridComponent = ConsultaGridComponent;
