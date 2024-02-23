Feature: Product Search
  As a user
  I want to search for a product
  So that I can find the items I'm interested in

  Scenario: Search for a product by its name
    Given I open the home page
    When I enter "phone" into the search bar
    And I click the search button
    Then I should see a list of products
    And each product in the list should contain the word "phone" in its title or description
