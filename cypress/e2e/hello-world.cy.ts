describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com');

    cy.contains('estou com sorte', {
      matchCase: false,
    }).click();
  });
});
