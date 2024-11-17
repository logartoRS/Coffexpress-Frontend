import { Component, Input } from '@angular/core';
import { PostItem } from '../../models/post-item.interface';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() postItem!: PostItem;
  minutesElapsed: string = 'Ahora';

  ngOnInit() {
    this.minutesElapsed = this.calculateElapsedTime(this.postItem.ProductCreationDate);
  }

  calculateElapsedTime(fecha: Date): string {
    const now = new Date();
    const difference = now.getTime() - fecha.getTime();
    
    const minutesElapsed = Math.floor(difference / (1000 * 60));
    const hoursElapsed = Math.floor(difference / (1000 * 60 * 60));
    const daysElapsed = Math.floor(difference / (1000 * 60 * 60 * 24));
  
    if (daysElapsed > 0) {
      return `${daysElapsed} d`;
    } else if (hoursElapsed > 0) {
      return `${hoursElapsed} h`;
    } else if (minutesElapsed > 0) {
      return `${minutesElapsed} min`;
    } else {
      return 'Ahora';
    }
  }

  toggleLike(): void {
    this.postItem.IsLiked = !this.postItem.IsLiked;
    if (this.postItem.IsLiked) {
      this.postItem.ProductLikes++;
    } else {
      this.postItem.ProductLikes--;
    }
  }
}
