import { Component } from '@angular/core';

import { CarouselItem } from '../../models/carousel-item.interface';
import { PostItem } from '../../models/post-item.interface';

import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../../common/header/header.component';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import { PostComponent } from '../../common/post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    HeaderComponent,
    CarouselComponent,
    PostComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allItems: CarouselItem[] = [
    { image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 1', user: 'User1' },
    { image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 2', user: 'User2' },
    { image: 'https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 3', user: 'User3' },
    { image: 'https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 4', user: 'User4' },
    { image: 'https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 5', user: 'User5' },
    { image: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 6', user: 'User6' },
    { image: 'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 7', user: 'User7' },
    { image: 'https://images.pexels.com/photos/1187761/pexels-photo-1187761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 8', user: 'User8' },
    { image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 9', user: 'User9' },
    { image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 10', user: 'User10' },
    { image: 'https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 11', user: 'User11' },
    { image: 'https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 12', user: 'User12' },
    { image: 'https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 13', user: 'User13' },
    { image: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 14', user: 'User14' },
    { image: 'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 15', user: 'User15' },
    { image: 'https://images.pexels.com/photos/1187761/pexels-photo-1187761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 16', user: 'User16' },
  ];

  postItems: PostItem[] = [
    {
      Store: 'Store1',
      StoreImage: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ProductCreationDate: new Date('2024-11-15T12:00:00'),
      ProductName: 'Producto 1',
      ProductImage: 'https://images.pexels.com/photos/302888/pexels-photo-302888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      IsLiked: false,
      ProductLikes: 25,
      ProductPrice: 12,
      ProductDivisa: 'PEN',
      ProductDescription: 'Sed imperdiet orci non tortor elementum sollicitudin. Cras nec leo ut libero cursus pulvinar at non velit. Integer convallis sapien nisi, quis tincidunt leo lobortis id. Ut iaculis ipsum sem, vehicula pellentesque nisi commodo vitae. Nunc ipsum leo, vulputate varius est sed, molestie viverra leo. Ut quis fringilla sem. Fusce id tempus sem, ut vehicula nisi. Vestibulum nisi velit, accumsan in diam eget, tincidunt porta dolor.'
    },
    {
      Store: 'Store2',
      StoreImage: 'https://images.pexels.com/photos/2744760/pexels-photo-2744760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ProductCreationDate: new Date('2024-11-16T23:55:00'),
      ProductName: 'Producto 2',
      ProductImage: 'https://images.pexels.com/photos/1510690/pexels-photo-1510690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      IsLiked: true,
      ProductLikes: 101,
      ProductPrice: 25,
      ProductDivisa: 'PEN',
      ProductDescription: 'Sed imperdiet orci non tortor elementum sollicitudin. Cras nec leo ut libero cursus pulvinar at non velit. Integer convallis sapien nisi, quis tincidunt leo lobortis id. Ut iaculis ipsum sem, vehicula pellentesque nisi commodo vitae. Nunc ipsum leo, vulputate varius est sed, molestie viverra leo. Ut quis fringilla sem. Fusce id tempus sem, ut vehicula nisi. Vestibulum nisi velit, accumsan in diam eget, tincidunt porta dolor.'
    },
    {
      Store: 'Store3',
      StoreImage: 'https://images.pexels.com/photos/1467475/pexels-photo-1467475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ProductCreationDate: new Date('2024-11-15T12:00:00'),
      ProductName: 'Producto 3',
      ProductImage: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      IsLiked: true,
      ProductLikes: 1055,
      ProductPrice: 20,
      ProductDivisa: 'PEN',
      ProductDescription: 'Sed imperdiet orci non tortor elementum sollicitudin. Cras nec leo ut libero cursus pulvinar at non velit. Integer convallis sapien nisi, quis tincidunt leo lobortis id. Ut iaculis ipsum sem, vehicula pellentesque nisi commodo vitae. Nunc ipsum leo, vulputate varius est sed, molestie viverra leo. Ut quis fringilla sem. Fusce id tempus sem, ut vehicula nisi. Vestibulum nisi velit, accumsan in diam eget, tincidunt porta dolor.'
    },
    {
      Store: 'Store4',
      StoreImage: 'https://images.pexels.com/photos/302892/pexels-photo-302892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ProductCreationDate: new Date('2024-11-14T23:12:00'),
      ProductName: 'Producto 4',
      ProductImage: 'https://images.pexels.com/photos/2159106/pexels-photo-2159106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      IsLiked: false,
      ProductLikes: 301,
      ProductPrice: 105,
      ProductDivisa: 'USD',
      ProductDescription: 'Sed imperdiet orci non tortor elementum sollicitudin. Cras nec leo ut libero cursus pulvinar at non velit. Integer convallis sapien nisi, quis tincidunt leo lobortis id. Ut iaculis ipsum sem, vehicula pellentesque nisi commodo vitae. Nunc ipsum leo, vulputate varius est sed, molestie viverra leo. Ut quis fringilla sem. Fusce id tempus sem, ut vehicula nisi. Vestibulum nisi velit, accumsan in diam eget, tincidunt porta dolor.'
    }
  ];
}
