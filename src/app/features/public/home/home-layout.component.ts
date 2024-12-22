import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home-layout',
    imports: [RouterLink, RouterOutlet],
    template: `
    <div class="body">
      <header>
        <h1>HOME - HEADER</h1>
        <nav>
          <ul>
            <li><a routerLink="/admin">Admin</a></li>
            <li><a routerLink="/auth">Auth</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <router-outlet></router-outlet>
      </main>

      <footer>
        <h3>HOME -- FOOTER</h3>
      </footer>
    </div>
  `,
    styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
