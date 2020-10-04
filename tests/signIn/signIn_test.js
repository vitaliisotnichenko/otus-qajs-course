const { I, routes, homePO, signInPO , accountCreationPO} = inject()
const faker = require('Faker')

Feature("Sign In feature")

Before(() => {
    I.amOnPage(routes.HOME_PAGE)
})

Scenario("Sign In to the website", async () => {
    const email = faker.internet.email()
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const address = faker.address.streetAddress()
    const city = faker.address.city()
    const phone = faker.phone.phoneNumber()
    I.click(homePO.locators.signInButton)
    signInPO.createAccount(email)
    I.waitForElement(accountCreationPO.locators.accountCreationForm, process.env.TIMEOUT)
    I.see('YOUR PERSONAL INFORMATION')
    accountCreationPO.fillAccountCreationForm(firstName, lastName, email, process.env.PASSWORD, address, city, phone)
    I.see('Welcome to your account. Here you can manage all of your personal information and orders.')
})