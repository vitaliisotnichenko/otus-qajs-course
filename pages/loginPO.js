const { I } = inject()

module.exports = {
    locators: {
        username: {css: '#username'},
        password: {css: '#password'},
        loginButton: {css: '[type="submit"]'}
    },

    fillLoginForm(credentials){
        I.fillField(this.locators.username, credentials)
        I.fillField(this.locators.password, credentials)
        I.click(this.locators.loginButton)
    }
}