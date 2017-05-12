import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
import { Router } from '@angular/router';

@Component({
	selector: 'detail-pokemon',
	templateUrl: 'app/templates/DetailPokemon.html'

})

export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon = null; // pokémon à afficher dans le template

	constructor(private router: Router, private route: ActivatedRoute, private pokemonsService: PokemonsService) {}
     // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.

		 finishsearch: number =0;

		 ngOnInit(): void {
	   this.route.params.forEach((params: Params) => {

	     let id = +params['id'];
	     this.pokemonsService.getPokemon(id).then(pokemon => this.pokemon = pokemon, finishsearch => this.finishsearch=1)
	   });

		// console.log ('Pokémon id : ',Pokemon,  this.route.params['_value']['id']);
	 }

  // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
	goBack(): void {
		let link = ['/pokemon/all'];
	  this.router.navigate(link);
  }

	// On crée une méthode qui s'occupe de la redirection
goEdit(pokemon: Pokemon): void {
  let link = ['/pokemon/edit', pokemon.id];
  this.router.navigate(link);
}


}
