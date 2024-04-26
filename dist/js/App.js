import { NegocicaoController } from "./controllers/NegociacaoController.js";
const negotiationForm = document.querySelector("#negotiation-form");
const formController = new NegocicaoController();
negotiationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formController.add();
});
