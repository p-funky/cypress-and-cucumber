import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ProductPage from "../page-objects/ProductPage";
import CartPage from "../page-objects/cartPage";
import CheckoutPage from "../page-objects/checkoutPage";
import ConfirmationPage from "../page-objects/confirmationPage";
import CheckoutSuccessPage from "../page-objects/checkoutSuccessPage";

Before(() => {
  const product = "phone";
  const position = 2;
  cy.goToCartWithItem(product, position);
});

Given("I check my cart", () => {
  ProductPage.viewCart();
  CartPage.verifyPresentInCartPage();
});

Given("I have at least one item in my cart", () => {
  const quantity = 1;
  CartPage.verifyProductQuantityInCart(quantity);
});

When("I click checkout", () => {
  CartPage.proceedToCheckout();
  CheckoutPage.verifyPresentInCheckoutPage();
});

When("fill in first name with {string}", firstName => {
  CheckoutPage.addFirstName(firstName);
});

When("fill in last name with {string}", lastName => {
  CheckoutPage.addLastName(lastName);
});

When("fill in email", () => {
  const email = `johndoe+${Date.now()}@email.com`;
  CheckoutPage.addEmail(email);
});

When("fill in phone number with {string}", phoneNumber => {
  CheckoutPage.addPhone(phoneNumber);
});

When("fill in password with {string}", password => {
  CheckoutPage.addPassword(password);
});

When("fill in password confirmation with {string}", password => {
  CheckoutPage.addPasswordConfirmation(password);
});

When("fill in address with {string}", address => {
  CheckoutPage.addAddress1(address);
});

When("fill in City with {string}", city => {
  CheckoutPage.addCity(city);
});

When("fill in Post Code with {string}", postCode => {
  CheckoutPage.addPostCode(postCode);
});

When("fill in Country with {string}", country => {
  CheckoutPage.selectCountry(country);
});

When("fill in State with {string}", state => {
  CheckoutPage.selectZone(state);
});

When("uncheck the store newsletter", () => {
  CheckoutPage.uncheckNewsLetter();
});

When("agree to the privacy policy", () => {
  CheckoutPage.checkPrivacyPolicy();
});

When("agree to the terms and conditions", () => {
  CheckoutPage.checkTermsAndConditions();
});

When("click continue", () => {
  CheckoutPage.completeCheckout();
});

When("confirm my order", () => {
  ConfirmationPage.verifyPresentInConfirmationPage();
  ConfirmationPage.confirmOrder();
});

Then("I should have completed checkout", () => {
  CheckoutSuccessPage.verifyPresentInCheckoutSuccessPage();
  CheckoutSuccessPage.verifyOrderPlacedSuccessMessage();
});
