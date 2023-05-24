describe("All Messages", () => {
  beforeEach(() => {
    // körs varje gång...
    cy.visit("http://localhost:5173/");
  });

  it("Should display the header correctly", () => {
    // get header...
    cy.get(".header");
    // get the correct banners...
    cy.get(".header__banner-container");
  });

  it("Should have a pre-loaded ul list with 5 pre loaded li's", () => {
    // get ul list...
    cy.get(".messages-page__ul");
    // get length of ul...
    cy.get(".messages-page__ul").find("li").should("have.length", 5);
  });

  it("should have the first li to have a writer named Snodden, the text should be Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga and the date should be måndag 3 Nov, 09:23", () => {
    // get the first li...
    cy.get(".messages-page__ul").find("li").eq(0);
    // get the first writer li and that should be "Snodden"
    cy.get(".messages-page__ul")
      .find("li")
      .eq(0)
      .find("p")
      .eq(2)
      .should("contain", "Snodden");
  });

  it("should be able to remove a message", () => {
    // get ul list...
    cy.get(".messages-page__ul");
    // get length of ul...
    cy.get(".messages-page__ul").find("li").should("have.length", 5);
    // click on the delete btn...
    cy.get(".messages-page__ul")
      .find("li")
      .eq(0)
      .find(".message-card__trash")
      .click();
    // get length of ul after deleted message...
    cy.get(".messages-page__ul").find("li").should("have.length", 4);
  });

  it("should go to new message page when i press the pencil button", () => {
    // pencil click...
    cy.get(".footer__pencil").click();
    // check if we are on the right url...
    cy.url().should("eq", "http://localhost:5173/NewMessages");
  });
});
