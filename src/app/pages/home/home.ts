import { Component } from '@angular/core';
import { Button } from '../../shared/component/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Button, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  pizzaHomePath: string = 'assets/pizza-home.jpeg';
  pizzaHomeText: string = 'image de pizza maison';
  tittleButton: string = 'Générer des recettes';

}
