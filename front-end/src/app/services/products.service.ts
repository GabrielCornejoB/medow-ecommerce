import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return[
      {
        description: 'Buzito',
        category: 'Anime',
        imageURL: 'https://i0.wp.com/scovalsco.com/wp-content/uploads/2022/06/anime-hoodie.jpg?fit=800%2C500&ssl=1',
        price: 120000
      },
      {
        description: 'Camiseta',
        category: "Colorido",
        imageURL: 'https://img.freepik.com/free-psd/t-shirt-colorful-tie-dye-print-women-apparel_53876-113686.jpg?w=2000',
        price: 45000
      },
      {
        description: 'Camiseta',
        category: 'Minimalista',
        imageURL: 'https://i.pinimg.com/originals/a8/7c/7a/a87c7ab1dd72fb450ecec573616d64be.jpg',
        price: 50000
      },
      {
        description: 'Jogger',
        category: 'Colorido',
        imageURL: 'https://i.etsystatic.com/26424606/r/il/4c5f0c/3895668949/il_fullxfull.3895668949_q679.jpg',
        price: 140000
      }
    ]
  }
}
