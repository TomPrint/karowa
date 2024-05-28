import { Component } from '@angular/core';
import { CookieConsentComponent } from './cookies/cookie-consent/cookie-consent.component';
import { PrivacyComponent } from './modals/privacy/privacy.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CookieConsentComponent, PrivacyComponent]
})
export class AppComponent {
  title = 'Karowa26';
}
