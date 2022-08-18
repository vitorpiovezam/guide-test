import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-navbar></app-navbar>
    </header>

    <main>
      <router-outlet></router-outlet>
    <main>
  `,
  styleUrls: [`app.component.sass`]
})
export class AppComponent {
  title = 'spread-test';
}
