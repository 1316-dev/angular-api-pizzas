import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Button } from '../../../shared/component/button/button';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    logoPath: string = 'assets/logo.png';
    logoText: string = 'Pizza API';
    tittleButton: string = 'Generate recipes';
    private router = inject(Router);

    showButton: boolean = true;

    constructor() {
    // Réagit à chaque changement de route
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showButton = !event.urlAfterRedirects.includes('/home');
    });
  }



    refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/recipes']);
    });
  }
}
