const PRODUCT_PAGE = "#product-product";
const PRODUCT_IN_STOCK = "span.badge-success";
const ADD_TO_CART_BUTTON = 'button[title="Add to Cart"]';
const ADD_TO_CART_SUCCESS = ".toast-body > .d-flex > p";
const VIEW_CART_BUTTON = 'a[href $= "/cart"]';

class ProductPage {
  static verifyPresentInProductPage() {
    cy.get(PRODUCT_PAGE).should("be.visible");
  }
  static verifyProductAvailability() {
    cy.get(PRODUCT_IN_STOCK).contains("In Stock");
  }

  static addProductToCart() {
    cy.get(ADD_TO_CART_BUTTON).each(($button, index) => {
      if (index === 1) cy.wrap($button).click();
    });
  }

  static confirmAddToCartSuccessMessage() {
    cy.get(ADD_TO_CART_SUCCESS).contains("Success: You have added");
  }

  static viewCart() {
    cy.get(VIEW_CART_BUTTON).each(($button, index) => {
      if (index === 2) cy.wrap($button).click();
    });
  }
}

export default ProductPage;
