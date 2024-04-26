import { Negotiation } from "../models/Negotiation.js"

export class NegocicaoController {
    private inputDate: HTMLInputElement
    private inputQuantity: HTMLInputElement
    private inputValue: HTMLInputElement
 
    constructor () {
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
    }

    add(): void {
        this.createNegotiation()
        alert("Negotiation created")
        this.cleanForm()
        
    }
    createNegotiation (): Negotiation {
        const exp: RegExp = /-/g;
        const date: Date = new Date(  this.inputDate.value.replace(exp, ",") );
        const quantity: number = parseInt(this.inputQuantity.value);
        const value: number =  parseFloat(this.inputValue.value);
        const negotation = new Negotiation(
            date,
            quantity,
            value,
        )
        
        console.log(negotation)
        return negotation
    
    }

    
    cleanForm() {
        this.inputDate.value = ""
        this.inputQuantity.value = ""
        this.inputValue.value = ""
    }
}
