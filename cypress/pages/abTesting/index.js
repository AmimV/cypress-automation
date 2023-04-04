import { ELEMENTS } from "./elements";

class AbTesting {

    validarTela() {
        cy.get(ELEMENTS.title).invoke('text').then(($text) => {
            expect(['A/B Test Control', 'A/B Test Variation 1']).to.include($text.trim());
        })
        cy.get(ELEMENTS.body).invoke('text').then(($text) => {
            expect($text).contain('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).')
        })
    }
}

export default new AbTesting();