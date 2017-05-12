import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService} from './pokemons.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pokemon-form',
  templateUrl: 'app/templates/PokemonForm.html',
  styleUrls: ['app/Css/pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon; // propriété d'entrée du composant
  types: Array<string>; // types possibles d'un pokémon : 'Eau', 'Feu', etc ...

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router) { }

  ngOnInit() {
    // Initialisation de la propriété types
    this.types = this.pokemonsService.getPokemonTypes();
  }

  // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (~index) return true;
    return false;
  }

  // valide le nombre de 1-3 types par pokémon
isTypesValid(type: string): boolean {
  if(this.pokemon.types.length >= 3 && !this.hasType(type)) {
    return false;
  }
  return true;
}

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if ( checked ) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (~index) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  // La méthode appelée lorsque le formulaire est soumis.
  // La méthode appelée lorsque le formulaire est soumis pour la validation...
  onSubmit(): void {
    this.pokemonsService.update(this.pokemon)
      .then(() => {
        let link = ['/pokemon', this.pokemon.id];
        this.router.navigate(link);
      });
  }

}
