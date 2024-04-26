export class Negotiation {
    private _date;
    private _quantity;
    private _value;

    constructor (date: Date, quantity: number, value:number) {
        this._date = date;
        this._quantity = quantity
        this._value = value;
    }

    get date  (): Date {
        return this._date
    }
    
    get quanitity ():number {
        return this._quantity
    }

    get value (): number {
        return this._value
    }

    calculateVolume(): number {
        return this._quantity * this._value
    }
}