const BT = require('./scripts/BTclientes')

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

  const data = await BT.getClients()
  console.log(data);
}
main()


