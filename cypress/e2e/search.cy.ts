describe('search products', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('moletom');

    cy.location('pathname').should('include', '/search');
    cy.location('search').should('include', 'q=moletom');

    cy.get('a[href^="/product"]').should('exist');
  });

  it('should not be able to search page without a search query', () => {
    // Para suprimir o warning do proprio next ao navegar para alguma rota

    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.visit('/search');

    cy.location('pathname').should('equal', '/');
  });
});
