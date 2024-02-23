import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page-objects/HomePage";

Given("I open the home page", () => {
  HomePage.visitHomePage();
});

When("I enter {string} into the search bar", product => {
  HomePage.inputProductToBeSearchedFor(product);
});

When("I click the search button", () => {
  HomePage.search();
});

Then("I should see a list of products", () => {
  HomePage.verifySearchFoundResult();
});

Then(
  "each product in the list should contain the word {string} in its title or description",
  product => {
    HomePage.verifySearchResultMatchesQuery(product);
  }
);
