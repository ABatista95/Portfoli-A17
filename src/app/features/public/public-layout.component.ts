import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet],
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
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {

}
