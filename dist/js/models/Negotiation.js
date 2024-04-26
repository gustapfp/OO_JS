export class Negotiation {
    constructor(date, quantity, value) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }
    get date() {
        return this._date;
    }
    get quanitity() {
        return this._quantity;
    }
    get value() {
        return this._value;
    }
    calculateVolume() {
        return this._quantity * this._value;
    }
}
