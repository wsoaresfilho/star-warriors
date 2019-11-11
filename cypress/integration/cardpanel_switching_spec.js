describe('Card Panel Switching test', () => {
    before(() => {
        cy.visit('http://localhost:3000/');
        cy.get('.loading img', { timeout: 60000 }).should('have.length', 0);
    });

    describe('when app have loaded the cards', () => {
        it('the cards should the personal panel by default', () => {
            cy.get('.card-content__panel-starships').should('have.length', 0);
        });

        describe('when clicking on panel switch', () => {
            it('should change between panels', () => {
                cy.get('.card-content__panel-switch')
                    .first()
                    .find('.MuiSwitch-input')
                    .click();
                cy.get('.card-content__panel-starships')
                    .first()
                    .scrollIntoView()
                    .should('have.length', 1);

                cy.get('.card-content__panel-switch')
                    .first()
                    .find('.MuiSwitch-input')
                    .click();

                cy.get('.card-content__panel-switch')
                    .first()
                    .scrollIntoView()
                    .find('.card-content__panel-starships')
                    .should('have.length', 0);
            });
        });
    });
});
