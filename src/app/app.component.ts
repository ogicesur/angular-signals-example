import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  allProducts: Product[] = [
    { id: 1, name: 'ahmet', price: 100 },
    { id: 2, name: 'mehmet', price: 200 },
    { id: 3, name: 'mal', price: 300 }
  ];

}