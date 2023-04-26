require('dotenv').config();
const API = require('./instances/index')

async function getCompany(id) {

  try {
    const result = await API.get(
      `/${process.env.BT_TOKEN_EX_COMP}/crm.company.get.json?id=${id}`
      )
    if (result.data.error)
      return null
    return result.data.result
  } catch (error) {
    console.error({error});
    return null
  } 
}

module.exports = getCompany