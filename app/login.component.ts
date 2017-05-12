import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';

@Component({
	templateUrl:"app/templates/Login.html"
})
export class LoginComponent {
	message: string;

	constructor(public authService: AuthService, public router: Router) {
		this.setMessage();
	}

	// Informe l'utilisateur sur son authentfication.
	setMessage() {
		this.authService.isLoggedIn ?
			this.message = 'Vous êtes connecté.' : this.message = 'Vous êtes déconnecté.';
	}

	// Connecte l'utilisateur auprès du Guard
	login() {
		this.message = 'Tentative de connexion en cours ...';
		this.authService.login().subscribe(() => {
			this.setMessage();
			if (this.authService.isLoggedIn) {
				// Récupère l'URL de redirection depuis le service d'authentification
				// Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
				// Redirige l'utilisateur
				this.router.navigate([redirect]);
			}
		});
	}

	// Déconnecte l'utilisateur
	logout() {
		this.authService.logout();
		this.setMessage();
	}
}
