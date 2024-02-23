Feature: Print User Information

  Scenario: Printing user's name, email, and address to console
    Given some data with user records
    When a random user ID is selected
    Then the user's name, email, and address is printed to the console
