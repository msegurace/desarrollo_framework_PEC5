import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Wine } from '../models/wine.model';
import { WineQuantityChange } from '../models/winequantitychange.model';

@Component({
  selector: 'app-wineitem',
  template: `
    <div class="wine-card" 
        [ngClass]="{'insale': wine.isOnSale, 'notsale': !wine.isOnSale}">
        <img src="{{ wine!.imageUrl }}" alt="Imagen botella de vino" />
        <p>{{ wine.name }}</p>
        <p>{{ wine.price | number : '.2-2'}} €</p>
        <div class="wine-buttons">
            <button *ngIf="wine.quantityInCart > 0"
                (click)="onMinusItem($event)">-</button>
            <span>{{ wine.quantityInCart }}</span>
            <button (click)="onPlusItem($event)">+</button>
        </div>
    </div>
  `,
  styles: [ 
   ` 
    .wine-card {
      border: 1px solid black;
      border-radius: 5px;
      display: inline-block;
      padding: 10px;
      text-align: center;
    }
    
    .wine-card p {
      font-size: 25px;
    }
  
    .wine-buttons button {
      width: 40px;
      height: 40px;
      border-radius: 2px;
      margin: 10px;
    }
  
    .insale {
      background-color: darkslateblue;
    }
    
    .notsale {
      background-color: white;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineitemComponent implements OnInit {

  @Input() public wine: Wine;
  @Output() private changeQuantityObjectPlus: EventEmitter<WineQuantityChange>;
  @Output() private changeQuantityObjectMinus: EventEmitter<WineQuantityChange>;

  constructor() { 
    this.wine = new Wine();
    this.changeQuantityObjectPlus = new EventEmitter<WineQuantityChange>();
    this.changeQuantityObjectMinus = new EventEmitter<WineQuantityChange>();
  }

  ngOnInit(): void {
  }

  onPlusItem(event: any){
    console.log("Plus detected: " + this.wine.id + " - " + this.wine.quantityInCart);
    this.wine.quantityInCart++;
    this.changeQuantityObjectPlus.emit(new WineQuantityChange({ id: this.wine.id!, quantity: this.wine.quantityInCart }));
  }

  onMinusItem(event: any){
    this.wine.quantityInCart--;
    this.changeQuantityObjectMinus.emit(new WineQuantityChange({ id: this.wine.id!, quantity: this.wine.quantityInCart }));
  }
}
