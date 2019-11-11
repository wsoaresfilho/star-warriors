describe('Theme Switching test', () => {
    before(() => {
        cy.visit('http://localhost:3000/');
        cy.get('.loading img', { timeout: 60000 }).should('have.length', 0);
    });

    after(() => {
        cy.clearLocalStorage();
    });

    describe('when app starts', () => {
        it('should show ligth theme', () => {
            cy.clearLocalStorage();
            cy.get('.app').should('have.class', 'light');
        });

        describe('when clicking on theme switch', () => {
            it('should change between themes', () => {
                cy.get('.theme-switch input.MuiSwitch-input').click();
                cy.get('.app').should('have.class', 'dark');

                cy.get('.theme-switch input.MuiSwitch-input').click();
                cy.get('.app').should('have.class', 'light');
            });
        });
    });

    describe('when refreshing ', () => {
        it('should persist theme chosen by user', () => {
            cy.get('.theme-switch input.MuiSwitch-input').click();
            cy.get('.app').should('have.class', 'dark');

            cy.reload();

            cy.get('.app').should('have.class', 'dark');
        });
    });
});
