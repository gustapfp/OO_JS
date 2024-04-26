import { NegocicaoController } from "./controllers/NegociacaoController.js";
import { Negotiation } from "./models/Negotiation.js";


const negotiationForm = document.querySelector("#negotiation-form")

const formController = new NegocicaoController()
negotiationForm.addEventListener("submit", (event) => {
        event.preventDefault()
        formController.add()
    }

)
