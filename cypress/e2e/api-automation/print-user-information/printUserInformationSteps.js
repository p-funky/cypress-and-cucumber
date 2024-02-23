import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { fetchAllUsers, getRandomUserID, printUserDetails } from "../../../support/utils.js";

let allUsersData;
let randomUserID;
   

Before(async () => {
  await fetchAllUsers();
});

Given("some data with user records", () => {
  cy.fixture("allUsers").then(data => {
    allUsersData = data;
  });
});

When("a random user ID is selected", () => {
  randomUserID = getRandomUserID(allUsersData);
  expect(Number.isInteger(randomUserID), "ID should be an integer").to.eq(true);
});

Then(
  "the user's name, email, and address is printed to the console",
  () => {
    printUserDetails(allUsersData, randomUserID);
  }
);
