const { el } = require("./elements");


class UserProfile {
    
    shouldHaveText(expectName) {
        cy.get(el.profile)
            .should('be.visible')
            .should('have.text', expectName);
    }
}

export default new UserProfile();