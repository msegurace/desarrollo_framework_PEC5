import { Component, OnInit } from '@angular/core';
import { Wine } from '../models/wine.model';
import { Food } from '../models/food.model';
import { WineQuantityChange } from '../models/winequantitychange.model';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  wines: Wine[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    this.loadWines();
  }

  onPlusItem(wineQuantityChange: WineQuantityChange){
    this.onWineQuantityChange(wineQuantityChange);
  }

  onMinusItem(wineQuantityChange: WineQuantityChange){
    this.onWineQuantityChange(wineQuantityChange);
  }

  onWineQuantityChange(wineQuantityChange: WineQuantityChange){
    console.log('Wine Quantity change triggered for ' + wineQuantityChange.id + ' - ' + wineQuantityChange.quantity);

    this.wines = this.wines.map(wine => {
      if (wine.id === wineQuantityChange.id!){
        wine.quantityInCart = wineQuantityChange.quantity
      }
      return wine;
    });
  }
 
  loadWines() {   
    this.wines.push(new Wine({
      name: "Tajinaste Tinto 2021",
      imageUrl: "assets/botella.jpg",
      isOnSale: true,
      price: 16.40,
      quantityInCart: 3,
      foodPairing: this.newFoods()
    }));

    this.wines.push(new Wine({
      name: "Araucaria 2022",
      imageUrl: "assets/botella.jpg",
      isOnSale: true,
      price: 23.40,
      quantityInCart: 5,
      foodPairing: this.newFoods()
    }));

    this.wines.push(new Wine({
      name: "El Grifo 2022",
      imageUrl: "assets/botella.jpg",
      isOnSale: false,
      price: 15.60,
      quantityInCart: 0,
      foodPairing: this.newFoods(),
    }));
  }

  newFoods(): Food[] {
    let foods: Food[] = [];
    foods[0] = new Food({
      name: 'Comida 1',
      gluten: false,
      kcal: 100,
      vegan: false
    });

    foods[1] = new Food({
      name: 'Comida 2',
      gluten: true,
      kcal: 200,
      vegan: true
    });

    return foods;
  }
}
