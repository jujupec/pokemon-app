import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-app',
  template: `<!-- Barre de navigation -->
<nav>
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo center">pokemon-app</a>
    </div>
</nav>

<!-- Contenu des composants -->
<router-outlet></router-outlet>`
})
export class AppComponent {}
