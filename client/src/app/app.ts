import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Header } from "./layout/header/header";
// import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false
})
export class App {
  protected readonly title = signal('tutorial');
}
