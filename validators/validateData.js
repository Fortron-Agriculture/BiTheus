const validateCnpj = require('./validateCnpj')
const validateEmail = require('./validateEmail')

function validate(data){
  const {cnpj, email} = data
  const cnpjValido = validateCnpj(cnpj)
  const emailValido = validateEmail(email)
  
  return ({
    cnpj: cnpjValido ? cnpj : '',
    email: emailValido ? email : ''
  })
}

module.exports = validate