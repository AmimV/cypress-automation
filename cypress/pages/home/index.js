import { ELEMENTS } from "./elements";

class Home {

    validarAcesso() {
        cy.contains('Welcome to the-internet');
        
    }

    acessarAbTest() {
        cy.get(ELEMENTS.abTesting).click();
    }
}

export default new Home(); 