import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {
  fetchAllUsers,
  getRandomUserID,
  printUserDetails,
  URL
} from "../../../support/utils.js";

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

When("a user ID is selected", () => {
  randomUserID = getRandomUserID(allUsersData);
  expect(Number.isInteger(randomUserID), "ID should be an integer").to.eq(true);
});

Then("the user's information will be printed to the console", () => {
  printUserDetails(allUsersData, randomUserID);
});

Then("the user's associated posts will be retrieved", async () => {
  await cy.request("GET", `${URL}/posts`).then(response => {
    expect(response.status).to.eq(200);
    const userPosts = response.body.filter(({ userId }) => userId === randomUserID);
    expect(userPosts.length).to.be.gte(1);
    userPosts.forEach(post => {
      expect(post.userId).to.eq(randomUserID);
    });
    cy.log("\n");
    cy.log(userPosts, ["userId", "id", "title"], "logTable");
  });
});
