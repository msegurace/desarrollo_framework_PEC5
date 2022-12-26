import { Food } from "./food.model";

interface WineInterface {
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
    foodPairing: Food[];
}

export class Wine {
    public id?: string;
    public name: string;
    public imageUrl: string;
    public price: number;
    public isOnSale: boolean;
    public quantityInCart: number;
    public foodPairing: Food[];

    constructor ( { name, imageUrl, price, isOnSale, quantityInCart, foodPairing}: WineInterface = {
        name: '', 
        imageUrl: '',
        price: 0,
        isOnSale: false,
        quantityInCart: 0,
        foodPairing: []
    }) {
        this.id = this.uuidv4!();
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.isOnSale = isOnSale;
        this.quantityInCart = quantityInCart;
        this.foodPairing = foodPairing
    }

    //La trata como una propiedad en vez de un método y no sé por qué
    //para solventarlo lo pongo como opcional
    uuidv4?() {
        return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        );
      }

}