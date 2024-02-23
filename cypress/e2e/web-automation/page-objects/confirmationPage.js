const CONFIRMATION_NAV = "ol .breadcrumb-item:nth-child(4)";
const CONFIRM_BUTTON = "#button-confirm";

class ConfirmationPage {
  static verifyPresentInConfirmationPage() {
    cy.url().should("include", "checkout/confirm");
    cy.get(CONFIRMATION_NAV).contains("Confirm Order");
  }

  static confirmOrder() {
    cy.get(CONFIRM_BUTTON).click();
  };
}

export default ConfirmationPage;
