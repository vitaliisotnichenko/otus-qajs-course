const { I } = inject ()

module.exports = {
    locators: {

        subjectHeading: {css: '#id_contact'},
        messageTextField: {css: '#message'},
        submitMessageButton: {css: '#submitMessage'},
        alert: {css: '.alert'}

    },

    sendMessage: function (messageText) {
        I.selectOption(this.locators.subjectHeading, 'Customer service')
        I.fillField(this.locators.messageTextField, messageText)
        I.click(this.locators.submitMessageButton)
        I.waitForElement(this.locators.alert, process.env.TIMEOUT)

    }

}