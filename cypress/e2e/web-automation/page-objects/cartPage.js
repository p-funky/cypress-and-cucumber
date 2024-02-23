const CART_NAV = "ol .breadcrumb-item:nth-child(2)";
const QUANTITY = 'input[name^="quantity"]';
const GO_TO_CHECKOUT_BUTTON = 'a[href $= "/checkout"]';

class CartPage {
  static verifyPresentInCartPage() {
    cy.url().should("include", "checkout/cart");
    cy.get(CART_NAV).contains("Shopping Cart");
  }

  static verifyProductQuantityInCart(number) {
    cy.get(QUANTITY).should("have.value", `${number}`);
  }

  static proceedToCheckout() {
    cy.get(GO_TO_CHECKOUT_BUTTON).each(($button, index) => {
      if (index === 1) cy.wrap($button).click();
    });
  }
}

export default CartPage;
