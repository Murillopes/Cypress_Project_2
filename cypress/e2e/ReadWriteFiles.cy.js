
before(function () {
    cy.fixture('example.json').as('test_data')
})


it('Read files using fixture', function () {

    cy.fixture('example.json').then((x) => {
        cy.log(x.name)
        cy.log(x.email)

    })

    cy.log(this.test_data.name)
})