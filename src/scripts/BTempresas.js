require('dotenv').config();
const {BtApi} = require('../APIS')

async function getCompanies() {
  const filtros = "FILTER[>DATE_CREATE]=2023-04-19"
  const campos = "SELECT[]=TITLE"
    +"&SELECT[]=UF_CRM_1681997730056" //CNPJ/CPF
    +"&SELECT[]=UF_CRM_1682000160137" // TESTE

  try {
    const result = await BtApi.get(
      `/${process.env.BT_TOKEN_EX_COMP}/crm.company.list.json?${filtros}&${campos}`
      )
    return result.data
  } catch (error) {
    console.error(error);
    return null
  } 
}

module.exports = {getCompanies}