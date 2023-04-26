const getCompany = require('../api/getCompany');
const validateCompany = require('../validators/validateData')

async function companyController(req, res){
  const data = req.query
  if (!data.id) {
    return {'erro':'campo id não encontrado'}
  }
  const company = await getCompany(data.id)
  if (!company) return {error:'um erro ocorreu, cheque os dados tente novamente'}

  validateCompany(company)
  
  res.send({company})
}

module.exports = {companyController}