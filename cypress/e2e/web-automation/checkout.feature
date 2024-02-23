Feature: Checkout
  As a user
  I want to checkout from the shopping cart
  So that I can receive the items I paid for

  Scenario: Checkout from the shopping cart
    Given I check my cart
    And I have at least one item in my cart
    When I click checkout
    And fill in first name with "John"
    And fill in last name with "Doe"
    And fill in email
    And fill in phone number with "+2348012345678"
    And fill in password with "password"
    And fill in password confirmation with "password"
    And fill in address with "0, Random Street"
    And fill in City with "Ajegunle"
    And fill in Post Code with "100231"
    And fill in Country with "Nigeria"
    And fill in State with "Lagos"
    And uncheck the store newsletter
    And agree to the privacy policy
    And agree to the terms and conditions
    And click continue
    And confirm my order
    Then I should have completed checkout
