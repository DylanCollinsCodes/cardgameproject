const emailValidator = require('deep-email-validator')

module.exports = {
    isEmailValid: async function(email){
        return emailValidator.validate(email)
    }
}