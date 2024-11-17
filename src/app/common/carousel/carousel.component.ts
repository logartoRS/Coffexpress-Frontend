import { Component, Input } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item.interface';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() allItems: CarouselItem[] = [];

  items: CarouselItem[] = [];
  currentIndex = 8;
  maxIndex = 0;
  
  ngOnInit() {
    this.items = this.allItems.slice(0, 8);
    this.maxIndex = this.allItems.length;
  }

  moveRight() {
    if (this.currentIndex < this.allItems.length) {
      const container = document.querySelector('.carousel-container');
      if (container) {
        container.classList.add('move-right');
        setTimeout(() => container.classList.remove('move-right'), 200);
      }
  
      this.items.shift();
      this.items.push(this.allItems[this.currentIndex]);
      this.currentIndex++;
    }
  }

  moveLeft() {
    if (this.currentIndex > 8) {
      const container = document.querySelector('.carousel-container');
      if (container) {
        container.classList.add('move-left');
        setTimeout(() => container.classList.remove('move-left'), 200);
      }
  
      this.currentIndex--;
      this.items.pop();
      this.items.unshift(this.allItems[this.currentIndex - 8]);
    }
  }
}