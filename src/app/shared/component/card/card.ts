import { Component, Input } from '@angular/core';
import { Button } from '../button/button';
import { Recipes } from '../../../pages/recipes/recipes';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() description: string[] = [];
  @Input() imageUrl: string = '';
  @Input() tags: string[] = [];
  tittleButton: string = 'Voir la recette';

}

