const { I, routes, homePO, signInPO , accountCreationPO} = inject()
const faker = require('faker')

Feature("Sign In feature")

Before(() => {
    I.amOnPage(routes.HOME_PAGE)
})

Scenario("Sign In to the website", async () => {
    const email = internet.email()
    const firstName = name.firstName()
    const lastName = name.lastName()
    const address = _address.streetAddress()
    const city = _address.city()
    const phone = _phone.phoneNumber()
    I.click(homePO.locators.signInButton)
    signInPO.createAccount(email)
    I.waitForElement(accountCreationPO.locators.accountCreationForm, process.env.TIMEOUT)
    I.see('YOUR PERSONAL INFORMATION')
    accountCreationPO.fillAccountCreationForm(firstName, lastName, email, process.env.PASSWORD, address, city, phone)
    I.see('Welcome to your account. Here you can manage all of your personal information and orders.')
})