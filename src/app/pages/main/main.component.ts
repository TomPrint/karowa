import { Component } from '@angular/core';
import { PrivacyComponent } from '../../modals/privacy/privacy.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PrivacyComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  {
    
  currentIndex = 0;
    images = [
      'assets/carousel1.png',
      'assets/carousel2.png',
      'assets/carousel3.png',
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








