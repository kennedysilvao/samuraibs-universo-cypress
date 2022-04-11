const { el } = require("./elements");
import userProfile from '../../components/userProfile';
import toast from '../../components/toast';
import alert from '../../components/alert';

class LoginPage {

    constructor() {
        this.userProfile = userProfile;
        this.toast = toast;
        this.alert = alert;
    }

    go() {
        cy.visit('/');

        cy.contains(el.title)
            .should('be.visible');
    }

    auth(user) {
        cy.get(el.email).clear().type(user.email);
        cy.get(el.password).clear().type(user.password)
    }

    submit() {
        cy.contains(el.authButton).click();
    }
}

export default new LoginPage();