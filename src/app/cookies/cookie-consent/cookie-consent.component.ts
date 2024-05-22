import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.css'
})
export class CookieConsentComponent {
  showBanner: boolean;
  acceptAnalytics: boolean = false;
  acceptMarketing: boolean = false;
  acceptNecessary: boolean = true;

  constructor(private cookieService: CookieService) {
    this.showBanner = !this.cookieService.check('user-consent');
    this.acceptAnalytics = this.cookieService.get('accept-analytics') === 'true';
    this.acceptMarketing = this.cookieService.get('accept-marketing') === 'true';
    this.acceptNecessary = this.cookieService.get('accept-necessary') !== 'false';
  }

  acceptCookies() {
    this.cookieService.set('user-consent', 'true', 30, '/');
    this.cookieService.set('accept-analytics', String(this.acceptAnalytics), 15, '/');
    this.cookieService.set('accept-marketing', String(this.acceptMarketing), 15, '/');
    this.cookieService.set('accept-necessary', String(this.acceptNecessary), 30, '/');
    this.showBanner = false;
  }

  rejectCookies() {
    this.cookieService.delete('accept-analytics', '/');
    this.cookieService.delete('accept-marketing', '/');
    this.showBanner = false;
  }
}