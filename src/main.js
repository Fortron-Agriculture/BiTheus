const BTclient = require('./scripts/BTclientes')
const BTcompany = require('./scripts/BTempresas')
const userdata = {
  NAME:'luis',
  LAST_NAME:'galleguillos',
  EMAIL:'luis@email.com',
  EMAIL_TYPE:'WORK',
  PHONE:'123456789',
  PHONE_TYPE:'WORK',
}

async function main(){
  // const result = await BT.createClient(userdata)
  // console.log(result);

  // const data = await BTclient.getClients()
  // console.log(data);
  const data = await BTcompany.getCompanies()
  console.log(data);
}
main()


