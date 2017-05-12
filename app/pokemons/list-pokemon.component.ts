
import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';
import { Http} from '@angular/http';

@Component({
  selector: 'list-pokemon',
  templateUrl:"app/templates/ListPokemon.html"

})

export class ListPokemonComponent implements OnInit {

	pokemons: Pokemon[] = null;
  finishsearch: number=0;

	constructor(private router: Router, private pokemonsService: PokemonsService , private http: Http) {

   }

  ngOnInit(): void {
  this.pokemonsService.getPokemons().then(pokemons => this.pokemons = pokemons , finishsearch => this.finishsearch=1);
}


	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}



}
