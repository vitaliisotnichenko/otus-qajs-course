const { I } = inject()

module.exports = {
    locators: {
        newEmailAddress: {css: '#email_create'},
        submitButton: {css: '#SubmitCreate'}
    },

    createAccount: function (email) {
        I.waitForElement(this.locators.newEmailAddress, process.env.TIMEOUT)
        I.fillField(this.locators.newEmailAddress, email)
        I.click(this.locators.submitButton)
    }
}