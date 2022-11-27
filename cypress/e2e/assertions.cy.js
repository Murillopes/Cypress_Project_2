
it('Assertions', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .and('be.enabled')  // i can use 'AND' to continue to do my assertions


    // (object) status that we want to assure   
    expect(true).to.be.true

    // this will pass because only compairs the value
    assert.equal(4, '4', 'not equal')
    // this will fail because compairs the value and the type (int, string) 
    assert.strictEqual(4, '4', 'not equal')

})
