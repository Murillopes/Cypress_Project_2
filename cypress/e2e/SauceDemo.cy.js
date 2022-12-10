
it('Login SauceDemo', () => {
    cy.visit("https://saucedemo.com");

    cy.get("input[id = 'user-name']").type("standard_user");
    cy.get("input[id = 'password']").type("secret_sauce");

    cy.get("input[id = 'login-button']").click();


    // VERIFICAÇÃO QUE ESTOU NA PÁGINA DE PRODUTOS
    cy.get("span[class='title']").should('have.text', "Products");

    //ADICIONA PRODUTO NO CARRINHO
    cy.get("button[name='add-to-cart-sauce-labs-backpack']").click();
    //CLICA NO BOTÃO DO CARRINHO DE COMPRAS
    cy.get("span[class='shopping_cart_badge']").click();

    // VERIFICAÇÃO O NOME DO PRODUTO NO CARRINHO
    cy.get("div[class='inventory_item_name']").should('have.text', "Sauce Labs Backpack");
})
