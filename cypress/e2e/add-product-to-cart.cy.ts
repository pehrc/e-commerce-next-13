describe('add product to cart', () => {
  it('deve ser capaz de navegar até a página do produto e adicioná-lo ao carrinho', () => {
    cy.visit('http://localhost:3000');

    // Encontrar o primeiro produto e efeutar o click
    cy.get('a[href^="/product"]').first().click();

    // Verifica de foi incluido o '/product' na URL
    cy.url().should('include', '/product');

    // Verifica de foi incluido o '/product' na URL
    cy.location('pathname').should('include', '/product');

    // Encontra o btn pelo nome e efetua o click
    cy.contains('Adicionar ao carrinho', {
      matchCase: false,
    }).click();

    cy.contains('Cart (1)').should('exist');
  });

  it('não deve contar produtos duplicados no carrinho', () => {
    cy.visit('http://localhost:3000');

    // Encontrar o primeiro produto e efeutar o click
    cy.get('a[href^="/product"]').first().click();

    // Verifica de foi incluido o '/product' na URL
    cy.url().should('include', '/product');

    // Verifica de foi incluido o '/product' na URL
    cy.location('pathname').should('include', '/product');

    // Encontra o btn pelo nome e efetua o click
    cy.contains('Adicionar ao carrinho', {
      matchCase: false,
    }).click();

    cy.contains('Adicionar ao carrinho', {
      matchCase: false,
    }).click();

    // Verifica se existe este elemento
    cy.contains('Cart (1)').should('exist');
  });

  it('deve ser capaz de pesquisar um produto e adicioná-lo ao carrinho', () => {
    cy.visit('http://localhost:3000');

    // Deve encontrar o input, digitar moletom e executar o submit do form
    cy.get('input[name=q]').type('moletom').parent('form').submit();

    // Encontrar o primeiro produto e efeutar o click
    cy.get('a[href^="/product"]').first().click();

    // Verifica de foi incluido o '/product' na URL
    cy.location('pathname').should('include', '/product');

    // Encontra o btn pelo nome e efetua o click
    cy.contains('Adicionar ao carrinho', {
      matchCase: false,
    }).click();

    // Verifica se existe este elemento
    cy.contains('Cart (1)').should('exist');
  });
});
