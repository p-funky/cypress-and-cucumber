import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page-objects/HomePage";
import ProductPage from "../page-objects/ProductPage";

Before(() => {
  const product = "phone";
  cy.goToProductSearchResult(product);
});

Given('I select a "phone" product', () => {
  const position = 2;
  HomePage.selectProduct(position);
});

Given('I am on the product page', () => {
  ProductPage.verifyPresentInProductPage();
});

Given("the product is available in stock", () => {
  ProductPage.verifyProductAvailability();
});

When('I click the "Add to Cart" button', () => {
  ProductPage.addProductToCart();
});

Then("the product should be added to my shopping cart", () => {
  ProductPage.confirmAddToCartSuccessMessage();
});
