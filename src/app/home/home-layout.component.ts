import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home-layout',
    imports: [RouterLink, RouterOutlet],
    template: `
    <header>
      <h1>HOME - HEADER</h1>
    </header>
    <nav>
      <ul>
        <li><a routerLink="/admin">Admin</a></li>
        <li><a routerLink="/auth">Auth</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
    <footer>
      <h3>HOME -- FOOTER</h3>
    </footer>
  `,
    styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
