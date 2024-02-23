Feature: Fetch All Users

  Scenario: Fetching all users
    Given an endpoint with a method to fetch users
    When the method to fetch all users is called
    Then it should return a list of all users

