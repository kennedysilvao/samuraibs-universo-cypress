const { el } = require("./elements");


class UserProfile {
    
    shouldHaveText(expectName) {
        cy.get(el.profile, {timeout: 7000})
            .should('be.visible')
            .should('have.text', expectName);
    }
}

export default new UserProfile();