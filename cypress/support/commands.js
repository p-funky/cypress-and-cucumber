import HomePage from "../e2e/web-automation/page-objects/HomePage";
import ProductPage from "../e2e/web-automation/page-objects/ProductPage";

Cypress.Commands.add('goToProductSearchResult', product => {
  HomePage.visitHomePage();
  HomePage.inputProductToBeSearchedFor(product);
  HomePage.search();
  HomePage.verifySearchFoundResult();
});

Cypress.Commands.add('goToCartWithItem', (product, position) => {
  cy.goToProductSearchResult(product);
  HomePage.selectProduct(position);
  ProductPage.addProductToCart();
  ProductPage.confirmAddToCartSuccessMessage();
});

Cypress.Commands.overwrite("log", function(log, ...args) {
  if (Cypress.browser.isHeadless) {
    return cy.task("log", args, { log: false }).then(() => {
      return log(...args);
    });
  } else {
    console.log(...args);
    return log(...args);
  }
});