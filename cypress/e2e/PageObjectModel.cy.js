import { LoginPage } from "../e2e/Pages/Login_Page"


//Criação de variável para acessar os métodos da classe
const login = new LoginPage();

//Comando comum para todos os testes, como se fosse um background no cucumber
beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})


describe('ALL TESTS', function () {

    it('Login with valid credentials', function () {
        // Chamada dos Métodos com parametros que eu forneço!
        login.enterUsername('Admin');
        login.enterPassword('admin123');
        login.clickLogin();
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    });

    it.skip('Login with Invalid user', function () {
        // Chamada dos Métodos com parametros que eu forneço
        login.enterUsername('Admin123');
        login.enterPassword('admin123');
        login.clickLogin();
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    });
});

it.skip('Login with Invalid password Test', function () {
    // Chamada dos Métodos com parametros que eu forneço
    login.enterUsername('Admin');
    login.enterPassword('admin1234');
    login.clickLogin();
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
});