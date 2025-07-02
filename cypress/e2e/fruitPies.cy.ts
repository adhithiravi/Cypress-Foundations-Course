describe('Fruit Pies Shop Page', () => {
  beforeEach(() => {
    cy.visit('/shop/fruit');
  });

  it("renders the fruit pies section", () => {
    cy.get("h1").contains("Fruit Pies").should("exist");
  })

  it("renders all fruit pies with name and price", () => {
    cy.get("[data-testid=pie-item]").each(($el) => {
      cy.wrap($el).find("h3").should("exist"); // Pie name
      cy.wrap($el).find("p").contains("$").should("exist"); // Price
    });
  })
});