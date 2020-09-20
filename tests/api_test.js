const { I } = inject();
let assert = require("assert");

Feature("Store feature");

Scenario("get list new books", async () => {
  let r = await I.sendGetRequest("https://api.itbook.store/1.0/new");
  assert.equal(r.status, 200);
  assert.equal(r.data.total, 10);
});

Scenario("get pets by id", async () => {
  let id = 1
  let r = await I.sendGetRequest(`https://petstore.swagger.io/v2/pet/${id}`);
  assert.equal(r.status, 200);
  assert.equal(r.data.id, 1)
  assert.equal(r.data.name, 'dunco')
});

Scenario("Place an order for a pet", async () => {
  const body = {
    "id": 11,
    "petId": 1,
    "quantity": 2,
    "status": "placed",
    "complete": true,
  };
  let r = await I.sendPostRequest("https://petstore.swagger.io/v2/store/order", body);
  assert.equal(r.status, 200),
  assert.equal(r.data.status, 'placed')
  assert.equal(r.data.quantity, 2)
});

Scenario('Create a new user', async () => {
  const body = {
  "id": 1111,
  "username": "vsot",
  "firstName": "Vitalii",
  "lastName": "Sotnichenko",
  "email": "test@ukr.net",
  "password": "123456",
  "phone": "32423424324",
  "userStatus": 0
  };
  let r = await I.sendPostRequest("https://petstore.swagger.io/v2/user", body)
  assert.equal(r.status, 200),
  assert.equal(r.data.code, 200),
  assert.equal(r.data.message, body.id)
})
