require('dotenv').config();
const {BtApi} = require('../APIS')

async function getClients() {
  const filtros = "FILTER[>DATE_CREATE]=2023-04-19"
  const campos = "SELECT[]=NAME"
    +"&SELECT[]=LAST_NAME"
    +"&SELECT[]=EMAIL"
    +"&SELECT[]=PHONE"

  try {
    const result = await BtApi.get(
      `/${process.env.BT_TOKEN_EX}/crm.contact.list.json?${filtros}&${campos}`
      )
    return result.data
  } catch (error) {
    console.error(error);
    return null
  }
  
}
 
async function createClient(userdata){
  const campos = `FIELDS[NAME]=${userdata.NAME}`
    +`&FIELDS[LAST_NAME]=${userdata.LAST_NAME}`
    +`&FIELDS[EMAIL][0][VALUE]=${userdata.EMAIL}`
    +`&FIELDS[EMAIL][0][VALUE_TYPE]=${userdata.EMAIL_TYPE}`
    +`&FIELDS[PHONE][0][VALUE]=${userdata.PHONE}`
    +`&FIELDS[PHONE][0][VALUE_TYPE]=${userdata.PHONE_TYPE}`

  try {
    const result = await BtApi.post(
      `/${process.env.BT_TOKEN_IM}/crm.contact.add.json?${campos}`
      )
    return result.data
  } catch (error) {
    console.error(error);
    return null
  }

}

module.exports = {getClients,createClient}