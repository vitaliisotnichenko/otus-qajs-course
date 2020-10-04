const { I, routes, homePO, contactUsPO } = inject ()
const faker = require('Faker')

Feature('Contac Us form')

Before (() => {
    I.amOnPage(routes.HOME_PAGE)
})

Scenario('Send contact us form', () => {
    const textMessage = faker.lorem.sentences(4)
    I.click(homePO.locators.contactUsButton)
    contactUsPO.sendMessage(textMessage)
    I.see('Your message has been successfully sent to our team.')
})