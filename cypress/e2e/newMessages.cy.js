describe("All Messages", () => {
  beforeEach(() => {
    // körs varje gång...
    cy.visit("http://localhost:5173/newMessages");
  });

  it("should check if we are on the right page(newMessagePage)", () => {
    cy.url().should("eq", "http://localhost:5173/newMessages");
  });

  it("Should display the header correctly", () => {
    // get header...
    cy.get(".header");
    // get the correct banners...
    cy.get(".header__banner-container");
  });

  it("should contain a text area, to write in, a username input and a publicera button", () => {
    // kollar om vi hittar textarea...
    cy.get(".new-message-form__message-container").should("be.visible");
    // kollar om vi hittar input för användarnamn...
    cy.get(".new-message-form__writer-input").should("be.visible");
    // kollar om vi hittar publicera knappen
    cy.get(".new-message-form__add-button").should("be.visible");
  });

  it("...", () => {
    // ...
  });
});
