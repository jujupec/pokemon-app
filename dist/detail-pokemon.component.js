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
var mock_pokemons_1 = require("./mock-pokemons");
var DetailPokemonComponent = (function () {
    function DetailPokemonComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pokemons = null; // liste des pokémons de notre application
        this.pokemon = null; // pokémon à afficher dans le template
    }
    // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.
    DetailPokemonComponent.prototype.ngOnInit = function () {
        // on initialise la liste de nos pokémons
        this.pokemons = mock_pokemons_1.POKEMONS;
        // on récupère le paramère 'id' contenu dans l'url
        var id = +this.route.snapshot.params['id'];
        // on itère sur le tableau de pokémon ensuite pour trouver le pokémon ayant le bon identifiant
        for (var i = 0; i < this.pokemons.length; i++) {
            // si on trouve un pokémon avec le bon identifiant,
            // on affecte ce pokémon à la propriété du composant
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    };
    // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
    DetailPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemons']);
    };
    return DetailPokemonComponent;
}());
DetailPokemonComponent = __decorate([
    core_1.Component({
        selector: 'detail-pokemon',
        templateUrl: 'app/templates/DetailPokemon.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], DetailPokemonComponent);
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map