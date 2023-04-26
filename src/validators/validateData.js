const validateCpf = require('./validateCpf')
const validateCnpj = require('./validateCnpj')
const validateEmail = require('./validateEmail')
const validatePhone = require('./validatePhone')
// const validateCep = require('./validateCep')

const formatDataCompany = require("../company/formatDataCompany")

const validateCpfCnpj = (n='') => n.replace(/[^\d]+/g,'').length === 11 ? validateCpf(n): validateCnpj(n)

function validate(data){
  const formatedData = formatDataCompany(data)
  const {
    emailCobranca,
    emailFaturamento,
    phone,
    cpfcnpj
  } = formatedData
  
  console.log({formatedData});
  const cnpjValido = validateCpfCnpj(cpfcnpj)
  const emailFaturamentoValido = validateEmail(emailFaturamento)
  const emailCobrancaValido = validateEmail(emailCobranca)
  const telefoneValido = validatePhone(phone)
  // const cepValido = validateCep(cep)
  
  return ({
    cnpj: cnpjValido ? cnpj : '',
    emailFaturamento: emailFaturamentoValido ? emailFaturamento : '',
    emailCobranca: emailCobrancaValido ? emailCobranca : '',
    telefone: telefoneValido ? telefone : '',
  })
}

module.exports = validate