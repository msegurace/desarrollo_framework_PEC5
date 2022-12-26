interface WineQuantityChangeInterface {
    id: string;
    quantity: number;
}

export class WineQuantityChange {
    public id: string;
    public quantity: number;

    constructor ( { id, quantity}: WineQuantityChangeInterface = {
        id: '',
        quantity: 0
    }) {
        this.id = id;
        this.quantity = quantity;
    }
}