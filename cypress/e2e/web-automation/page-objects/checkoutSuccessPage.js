const CHECKOUT_SUCCESS_NAV = "ol .breadcrumb-item:nth-child(4)";
const ORDER_PLACED_MESSAGE = "h1.page-title";

class CheckoutSuccessPage {
  static verifyPresentInCheckoutSuccessPage() {
    cy.url({ timeout: 10000 }).should("include", "checkout/success");
    cy.get(CHECKOUT_SUCCESS_NAV).contains("Success");
  }

  static verifyOrderPlacedSuccessMessage() {
    cy.get(ORDER_PLACED_MESSAGE).contains("Your order has been placed");
  }
}

export default CheckoutSuccessPage;
