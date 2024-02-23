Feature: Add product to cart
  As a user
  I want to add products to my shopping cart
  So that I can proceed to checkout

  Scenario: Add a product to the cart
    Given I select a "phone" product
    And I am on the product page
    And the product is available in stock
    When I click the "Add to Cart" button
    Then the product should be added to my shopping cart