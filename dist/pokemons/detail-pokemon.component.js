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
var router_2 = require("@angular/router");
var DetailPokemonComponent = (function () {
    function DetailPokemonComponent(router, route, pokemonsService) {
        this.router = router;
        this.route = route;
        this.pokemonsService = pokemonsService;
        this.pokemon = null; // pokémon à afficher dans le template
        // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.
        this.finishsearch = 0;
    }
    DetailPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.pokemonsService.getPokemon(id).then(function (pokemon) { return _this.pokemon = pokemon; }, function (finishsearch) { return _this.finishsearch = 1; });
        });
        // console.log ('Pokémon id : ',Pokemon,  this.route.params['_value']['id']);
    };
    // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
    DetailPokemonComponent.prototype.goBack = function () {
        var link = ['/pokemon/all'];
        this.router.navigate(link);
    };
    // On crée une méthode qui s'occupe de la redirection
    DetailPokemonComponent.prototype.goEdit = function (pokemon) {
        var link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    };
    return DetailPokemonComponent;
}());
DetailPokemonComponent = __decorate([
    core_1.Component({
        selector: 'detail-pokemon',
        templateUrl: 'app/templates/DetailPokemon.html'
    }),
    __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute, pokemons_service_1.PokemonsService])
], DetailPokemonComponent);
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map