import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './head/header';
import { Nav } from './nav/nav';
import { Aside } from './aside/aside';
import { Main } from './main/main';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Nav,Main,Aside,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Rangrezz');
}
