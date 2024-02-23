const URL = "https://ecommerce-playground.lambdatest.io";
const SEARCH_INPUT = 'input[name="search"][autocomplete="off"]';
const SEARCH_BUTTON = 'button.type-text[type="submit"]';
const FOUND_PRODUCTS_GRID = 'div[data-view_id="grid"]';
const PRODUCTS_LINKS = "a.text-ellipsis-2";

class HomePage {
  static visitHomePage() {
    cy.visit(URL);
  }

  static inputProductToBeSearchedFor(product) {
    cy.get(SEARCH_INPUT).type(product);
  }

  static search() {
    cy.get(SEARCH_BUTTON).click();
  }

  static verifySearchFoundResult() {
    cy.get(FOUND_PRODUCTS_GRID).should("be.visible");
  }

  static verifySearchResultMatchesQuery(searchQuery) {
    cy.get(PRODUCTS_LINKS).each($product => {
      cy.wrap($product).contains(searchQuery, { matchCase: false });
    });
  }

  static selectProduct(position) {
    cy.get(PRODUCTS_LINKS).each(($product, index) => {
      if (index === position - 1) cy.wrap($product).click();
    });
  }
}

export default HomePage;
