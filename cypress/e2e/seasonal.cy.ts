describe('Seasonal Shop Page', () => {
  beforeEach(() => {
    cy.visit('/shop/seasonal');
  });
  it("renders the Seasonal section", () => {
    cy.get("h1").contains("Seasonal").should("exist");
  })

  it("renders all Seasonal with name and price", () => {
    cy.get("[data-testid=pie-item]").each(($el) => {
      cy.wrap($el).find("h3").should("exist"); // Pie name
      cy.wrap($el).find("p").contains("$").should("exist"); // Price
    });
  })
});