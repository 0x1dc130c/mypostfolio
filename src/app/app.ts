import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layouts/navbar/navbar';
import { Footer } from './layouts/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `<div class="bg-[#0a0f1d] text-slate-300 antialiased selection:bg-cyan-500/40 selection:text-white min-h-screen flex flex-col overflow-x-hidden">
  
  <app-navbar class="fixed top-0 z-50 w-full block"></app-navbar>

  <main class="grow">
    <router-outlet></router-outlet>
  </main>

  <app-footer></app-footer>
</div>`,
})
export class App {
  protected readonly title = signal('portfolio');
}