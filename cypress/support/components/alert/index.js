import { el } from "./elements";

class AlertError {
    alertHaveText(expectText) {
        cy.contains(el.alertError, expectText)
        .should('be.visible');
    }
}

export default new AlertError();


