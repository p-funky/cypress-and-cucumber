import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { URL, fetchAllUsers } from "../../../support/utils.js";

Given("an endpoint with a method to fetch users", () => {
  cy.request("GET", URL).then(response => {
    expect(response.status).to.eq(200);
  });
});

When("the method to fetch all users is called", async () => {
  await fetchAllUsers();
});

Then("it should return a list of all users", () => {
  cy.fixture("allUsers").then(allUsersData => {
    expect(allUsersData.length).to.be.gte(1);
  });
});
