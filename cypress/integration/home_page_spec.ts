describe("Desktop toolbar buttons must work", () => {
  it("Visits the landing page", () => {
    cy.visit("/");

    cy.url().should("include", "/");
  });

  it('Clicks "about" button and redirects to its section', () => {
    cy.contains("About").click();

    cy.url().should("include", "/#about");
  });

  it('Clicks "skills" button and redirects to its section', () => {
    cy.contains("Skills").click();

    cy.url().should("include", "/#skills");
  });

  it('Clicks "portfolio" button and redirects to its section', () => {
    cy.contains("Portfolio").click();

    cy.url().should("include", "/#portfolio");
  });

  it('Clicks "contact me" button and redirects to its section', () => {
    cy.contains("Contact").click();

    cy.url().should("include", "/#contact");
  });

  it('Clicks "home" button and redirects to its section', () => {
    cy.contains("Home").click();

    cy.url().should("include", "/#");
  });
});
