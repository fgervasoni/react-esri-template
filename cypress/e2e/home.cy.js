describe('Home', () => {
    it("passes", () => {
        cy.visit("/");
        cy.get('#map', {
            timeout: 300000,
        }).should('be.visible');
    });
});
