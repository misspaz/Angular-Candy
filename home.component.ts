import { Component } from '@angular/core';
import { IChuches } from '../models/chuches.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  chuches: IChuches[];

  constructor() {
    this.chuches = [
      {
        name: 'Regaliz',
        price: 1.5,
        category: 'gominola',
        color: 'negro, rojo',
        image:
          'https://www.funtastyc.es/blog/wp-content/uploads/2020/02/regaliz.jpg',
      },
      {
        name: 'Bombón',
        price: 2,
        category: 'Chocolate',
        color: 'Marrón',
        image:
          'https://ideyaverde.es/5644-home_default/bombones-tipo-ferrero-rocher-veganos-love-raw.jpg',
      },
      {
        name: 'Dentadura',
        price: 1,
        category: 'gominola',
        color: 'rosa',
        image: 'https://willysinas.com/621/dentaduras-dulces-de-gominola.jpg',
      },
      {
        name: 'Solano',
        price: 1.2,
        category: 'caramelo',
        color: 'crema',
        image:
          'https://www.funtastyc.es/61674-medium_default/caramelos-solano-tradicional-sin-azucar.jpg',
      },
    ];
  }

  addNewChuche(chuche: IChuches) {
    this.chuches = [...this.chuches, chuche];
  }
}
