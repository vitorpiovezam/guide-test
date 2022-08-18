import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="wrapper">
    <nav>
      <a routerLink="/">
  			<img src="https://www.guide.com.br/wp-content/themes/theme_guide/build/css/imagens/layout/logo.svg?v234" width="100px">
      </a>

			<div class="info">
				Job Test
			</div>
    </nav>
  </div>
  `,
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
}
