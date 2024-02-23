export const URL = "https://jsonplaceholder.typicode.com";
const allUsersFilePath = "cypress/fixtures/allUsers.json";

export const fetchAllUsers = async () => {
  // clears the file before each tests
  cy.writeFile(allUsersFilePath, "");
  // fetches and stores the data for the user records
  await cy.request("GET", `${URL}/users`).then(response => {
    expect(response.status).to.eq(200);
    cy.writeFile(allUsersFilePath, response.body);
  });
};

export const getRandomUserID = data => {
  const allUserIDs = [];
  data.forEach(({ id }) => {
    allUserIDs.push(id);
  });
  return allUserIDs[Math.floor(allUserIDs.length * Math.random())];
};

export const printUserDetails = (data, userID) => {
  const randomUser = data.find(({ id }) => id === userID);
  const {
    name,
    email,
    address: { street, suite, city, zipcode },
    address
  } = randomUser;
  cy.log(`\nName: ${name}`);
  cy.log(`Email: ${email}`);
  cy.log(`Address: ${street}, ${suite}, ${city}, ${zipcode}\n`);
};
