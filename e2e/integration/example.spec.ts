context("Example", () => {
  describe("home page", () => {
    it("should greet the user", () => {
      cy.visit("/");
      cy.get("header").should("have.text", "Hello!");
    });
  });
});
