import { Component } from '@angular/core';
import { PrivacyComponent } from '../../modals/privacy/privacy.component';
import { CommonModule } from '@angular/common';




@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [PrivacyComponent, CommonModule]
})
export class MainComponent  {
    
  currentIndex = 0;
    images = [
      'assets/img-carousel1.jpg',
      'assets/img-carousel2.jpg',
      'assets/img-carousel3.jpg',
    ];

    get nextIndex() {
      return (this.currentIndex + 1) % this.images.length;
    }
  
    get prevIndex() {
      return (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  
    nextImage(): void {
      this.currentIndex = this.nextIndex;
    }
  
    previousImage(): void {
      this.currentIndex = this.prevIndex;
    }
  }








