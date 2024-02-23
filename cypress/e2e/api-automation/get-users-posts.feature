Feature: Get User's Associated Posts

  Scenario: Getting user's associated posts
    Given some data with user records
    When a user ID is selected
    Then the user's information will be printed to the console
    And the user's associated posts will be retrieved
