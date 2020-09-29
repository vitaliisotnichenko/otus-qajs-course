const { I } = inject()
module.exports = {
    locators: {
        username: {css: '#username'},
        email: {css: '#email'},
        password: {css: '#password1'},
        confirmPassword: {css: '#password2'},
        signup: {css: 'button.button'}
    },

    fillSignUpForm (user, email, password) {
        I.fillField(this.locators.username, user)
        I.fillField(this.locators.email, email)
        I.fillField(this.locators.password, password)
        I.fillField(this.locators.confirmPassword, password)
        I.click(this.locators.signup)
    }
}