const { I } = inject()

module.exports =  {

        locators: {
            accountCreationForm: { css: '#account-creation_form' },
            firstName: {css: '#customer_firstname'},
            lastName: {css: '#customer_lastname'},
            email: {css: '#email'},
            password: {css: '#passwd'},
            address: {css: '#address1'},
            city: {css: '#city'},
            state: {css: '#id_state'},
            postcode: {css:'#postcode'},
            mobilePhone: {css: '#phone_mobile'},
            submitAccountButton: {css: '#submitAccount'}
        },

        fillAccountCreationForm: function (firstName, lastName, email, password, address, city, mobilePhone) {
            I.fillField(this.locators.firstName, firstName)
            I.fillField(this.locators.lastName, lastName)
            I.fillField(this.locators.email, email)
            I.fillField(this.locators.password, password)
            I.fillField(this.locators.address, address)
            I.fillField(this.locators.city, city)
            I.selectOption(this.locators.state, '1')
            I.fillField(this.locators.postcode, '12354')
            I.fillField(this.locators.mobilePhone, mobilePhone)
            I.click(this.locators.submitAccountButton)

        }
    
}