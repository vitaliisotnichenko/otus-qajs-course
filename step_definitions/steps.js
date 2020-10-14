const { I, routes, homePO, signInPO , accountCreationPO} = inject();
const faker = require('Faker')
// Add in your custom step files

Given('I have a defined step', () => {
  I.amOnPage(routes.HOME_PAGE)
});

When('I create account', () => {
  const email = faker.internet.email()
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const address = faker.address.streetAddress()
  const city = faker.address.city()
  const phone = faker.phone.phoneNumber()
  I.click(homePO.locators.signInButton)
  signInPO.createAccount(email)
  I.waitForElement(accountCreationPO.locators.accountCreationForm, process.env.TIMEOUT)
})

Then('I am signed up', () => {
  I.see('YOUR PERSONAL INFORMATION')
  accountCreationPO.fillAccountCreationForm(firstName, lastName, email, process.env.PASSWORD, address, city, phone)
  I.see('Welcome to your account. Here you can manage all of your personal information and orders.')
})