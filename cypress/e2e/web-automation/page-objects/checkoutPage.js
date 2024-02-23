const CHECKOUT_NAV = "ol .breadcrumb-item:nth-child(3)";
const FIRST_NAME = "#input-payment-firstname";
const LAST_NAME = "#input-payment-lastname";
const EMAIL = "#input-payment-email";
const PHONE = "#input-payment-telephone";
const PASSWORD = "#input-payment-password";
const CONFIRM_PASSWORD = "#input-payment-confirm";
const ADDRESS_1 = "#input-payment-address-1";
const CITY = "#input-payment-city";
const POST_CODE = "#input-payment-postcode";
const COUNTRY = "#input-payment-country";
const ZONE = "#input-payment-zone";
const NEWS_LETTER = "#input-newsletter";
const PRIVACY_POLICY = "#input-account-agree";
const TERMS_AND_CONDITIONS = "#input-agree";
const CHECKOUT_BUTTON = "#button-save";
const CHECKOUT_FORM = "#form-checkout";

class CheckoutPage {
  static verifyPresentInCheckoutPage() {
    cy.url().should("include", "checkout/checkout");
    cy.get(CHECKOUT_NAV).contains("Checkout");
  }

  static addFirstName(name) {
    cy.get(FIRST_NAME).type(name);
  }

  static addLastName(name) {
    cy.get(LAST_NAME).type(name);
  }

  static addEmail(email) {
    cy.get(EMAIL).type(email);
  }

  static addPhone(phone) {
    cy.get(PHONE).type(phone);
  }

  static addPassword(password) {
    cy.get(PASSWORD).type(password);
  }

  static addPasswordConfirmation(password) {
    cy.get(CONFIRM_PASSWORD).type(password);
  }

  static addAddress1(address) {
    cy.get(ADDRESS_1).type(address);
  }

  static addCity(city) {
    cy.get(CITY).type(city);
  }

  static addPostCode(postCode) {
    cy.get(POST_CODE).type(postCode);
  }

  static selectCountry(coutry) {
    cy.get(COUNTRY).select(coutry);
  }

  static selectZone(zone) {
    cy.get(ZONE).select(zone);
  }

  static uncheckNewsLetter() {
    // it is checked by default so clicking will uncheck it
    // forcing true because it might be hidden from current view
    cy.get(NEWS_LETTER).click({ force: true });
  }

  static checkPrivacyPolicy() {
    // forcing true because it might be hidden from current view
    cy.get(PRIVACY_POLICY).click({ force: true });
  }

  static checkTermsAndConditions() {
    // forcing true because it might be hidden from current view
    cy.get(TERMS_AND_CONDITIONS).click({ force: true });
  }

  static completeCheckout() {
    // forcing true because it might be hidden from current view
    cy.get(CHECKOUT_BUTTON).click({ force: true });
    // cy.get(CHECKOUT_FORM).submit();
  }
}

export default CheckoutPage;
