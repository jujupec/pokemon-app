"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemons_service_1 = require("./pokemons.service");
var http_1 = require("@angular/http");
var ListPokemonComponent = (function () {
    function ListPokemonComponent(router, pokemonsService, http) {
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.http = http;
        this.pokemons = null;
        this.finishsearch = 0;
    }
    ListPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonsService.getPokemons().then(function (pokemons) { return _this.pokemons = pokemons; }, function (finishsearch) { return _this.finishsearch = 1; });
    };
    ListPokemonComponent.prototype.selectPokemon = function (pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    return ListPokemonComponent;
}());
ListPokemonComponent = __decorate([
    core_1.Component({
        selector: 'list-pokemon',
        templateUrl: "app/templates/ListPokemon.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, pokemons_service_1.PokemonsService, http_1.Http])
], ListPokemonComponent);
exports.ListPokemonComponent = ListPokemonComponent;
//# sourceMappingURL=list-pokemon.component.js.map