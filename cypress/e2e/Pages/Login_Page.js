export class LoginPage {

    // Definição dos Elemetos da Tela de login
    username_textbox = 'input[name="username"]';
    password_textbox = 'input[name="password"]';
    login_button = 'button[type="submit"]';


    // MÉTODOS
    enterUsername(username) {
        cy.get(this.username_textbox).type(username);
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password);
    }

    clickLogin() {
        cy.get(this.login_button).click();

    }
}