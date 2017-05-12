import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Http , Headers  } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokemonsService {
  constructor(private http: Http, private router: Router) {
    // Nothing
  }

  // Retourne tous les pokémons
  getPokemons():  Promise<Pokemon[]> {
  return this.http.get('app/pokemons')
             .toPromise()
             .then(response => response.json().data as Pokemon[])
             .catch(this.handleError);
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Promise<Pokemon> {
    const url = 'app/pokemons/' + id;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Pokemon)
      .catch(this.handleError);
  }

  update(pokemon: Pokemon): Promise<Pokemon> {
  const url = `app/pokemons/${pokemon.id}`;
  let headers = new Headers({'Content-Type': 'application/json'});

  return this.http
             .put(url, JSON.stringify(pokemon), headers)
             .toPromise()
             .then(() => pokemon)
             .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  // types de pokémons possible
getPokemonTypes(): Array<string> {
  return [
    'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
    'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
  ];
}

}
