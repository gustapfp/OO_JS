import { Negotiation } from "../models/Negotiation.js";
export class NegocicaoController {
    constructor() {
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
    }
    add() {
        this.createNegotiation();
        alert("Negotiation created");
        this.cleanForm();
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        const negotation = new Negotiation(date, quantity, value);
        console.log(negotation);
        return negotation;
    }
    cleanForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
    }
}
