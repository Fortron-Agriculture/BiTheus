function validate(cep){
  cep = cep.replace(/[^\d]+/g,'');
  if (cep.length == 8) 
    return true
  return false
}

module.exports = validate