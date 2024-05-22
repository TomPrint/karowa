import { Component } from '@angular/core';
import { CookieConsentComponent } from './cookies/cookie-consent/cookie-consent.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CookieConsentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'karowa';
}
