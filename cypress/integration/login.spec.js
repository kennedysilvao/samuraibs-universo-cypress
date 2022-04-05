import loginPage from "../support/pages/login/";

describe('login', () => {

    context('Quando o usuário é válido', () => {
        const user = {
            name: 'Bianca Valéria',
            email: 'bianca@gmail.com',
            password: 'pwd123',
            is_provider: true
        }
        before(() => {
            cy.postUser(user);
        });

        it('Deve fazer login com sucesso', () => {
            loginPage.go();
            loginPage.auth(user);
            loginPage.submit();
            loginPage.userProfile.shouldHaveText(user.name);
        });
    });

    context('Quando a senha é incorreta', () => {
        let user = {
            name: 'Debora Luiza',
            email: 'debora@gmail.com',
            password: 'pwd122',
            is_provider: true
        }

        before(() => {
            cy.postUser(user).then(() => {
                user.password = 'abc123';
            });
        });

        it('deve exibir um toast com uma mensagem de alerta', () => {
            loginPage.go();
            loginPage.auth(user);
            loginPage.submit();
            loginPage.toast.shouldHaveText('Ocorreu um erro ao fazer login, verifique suas credenciais.');
        });
    });

    context('Quando o email está no formato inválido', () => {
        const emails = [
            'papito.com.br',
            'kennedy.com',
            '@gmail.com',
            '@',
            'kennedy@',
            '111',
            '&*&*&',
            'xpto123'
        ];

        before(() => {
            loginPage.go();
        })
        emails.forEach((e) => {
            it('não deve logar com o email: ' + e, () => {
                const user = { email: e, password: 'pwd123' }
                loginPage.auth(user);
                loginPage.submit();
                loginPage.alert.alertHaveText('Informe um email válido');
            });
        });

    });

    context('Campos obrigatórios', () => {
        before(() => {
            loginPage.go();
            loginPage.submit();
        });
        it('deve exibir email obrigatório', () => {
            loginPage.alert.alertHaveText('E-mail é obrigatório');
        });
        it('deve exibir senha obrigatória', () => {
            loginPage.alert.alertHaveText('Senha é obrigatória');
        });
    });

});