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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
var PokemonsService = (function () {
    function PokemonsService(http, router) {
        this.http = http;
        this.router = router;
        // Nothing
    }
    // Retourne tous les pokémons
    PokemonsService.prototype.getPokemons = function () {
        return this.http.get('app/pokemons')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        var url = 'app/pokemons/' + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PokemonsService.prototype.update = function (pokemon) {
        var url = "app/pokemons/" + pokemon.id;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .put(url, JSON.stringify(pokemon), headers)
            .toPromise()
            .then(function () { return pokemon; })
            .catch(this.handleError);
    };
    PokemonsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    // types de pokémons possible
    PokemonsService.prototype.getPokemonTypes = function () {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    };
    return PokemonsService;
}());
PokemonsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], PokemonsService);
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map