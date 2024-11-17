import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Coffexpress';
  searchQuery = '';

  constructor(private router: Router) {}

  onSearchChange(query: string): void {
    this.searchQuery = query;
    console.log('Buscando:', query);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}