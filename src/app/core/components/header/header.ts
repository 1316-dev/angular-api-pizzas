import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from '../../../shared/component/button/button';

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

    refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/recipes']);
    });
  }
}
