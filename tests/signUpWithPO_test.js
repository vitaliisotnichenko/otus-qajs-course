const { I, signupPO, loginPO } = inject();
const faker = require('faker')

Feature('Sing Up to the website')


Scenario('Successfull signup on the website', async () => {
    I.amOnPage('https://try.vikunja.io/register')
    const user = faker.internet.userName()
    const password = faker.internet.password()
    const email = faker.internet.email()
    signupPO.fillSignUpForm(user, password, email)
    I.see(`Hi ${user}!`)
    
})

Scenario('Successfull login on the website', async () => {
    I.amOnPage('https://try.vikunja.io/login')
    const credentials = "demo"
    loginPO.fillLoginForm(credentials)
    I.see(`Hi ${credentials}`)
  
})

