const { I, signupPO, loginPO } = inject();
const faker = require('faker')

Feature('Sing Up to the website')


Scenario('Successfull signup on the website', async () => {
    I.amOnPage('https://try.vikunja.io/register')
    const user = faker.internet.userName()
    const password = faker.internet.password()
    const email = faker.internet.email()
    console.log(user)
    I.fillField(signupPO.locators.username, user)
    I.fillField(signupPO.locators.email, email)
    I.fillField(signupPO.locators.password, password)
    I.fillField(signupPO.locators.confirmPassword, password)
    I.click(signupPO.locators.signup)
    I.see(`Hi ${user}!`)
    
})

Scenario('Successfull login on the website', async () => {
    I.amOnPage('https://try.vikunja.io/login')
    const credentials = "demo"
    I.fillField(loginPO.locators.username, credentials)
    I.fillField(loginPO.locators.password, credentials)
    I.click(loginPO.locators.loginButton)
    I.see(`Hi ${credentials}`)
  
})

