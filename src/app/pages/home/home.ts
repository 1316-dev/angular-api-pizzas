import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  pizzaHomePath: string = 'assets/pizza-home.jpeg';
  pizzaHomeText: string = 'image de pizza maison';

}
