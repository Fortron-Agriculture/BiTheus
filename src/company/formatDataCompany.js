function formatDataCompany(data){
  const {
    UF_CRM_1682023974755,//cpf/cnpj
    UF_CRM_1682181662820,//emailFaturamento,
    UF_CRM_1682181682340,//emailCobranca,
    PHONE,//telefone,
  } = data
  
  const formatedData = {
    phone:PHONE ? PHONE[0]?.VALUE : '',
    emailCobranca:UF_CRM_1682181682340 ? UF_CRM_1682181682340[0] :'',
    emailFaturamento:UF_CRM_1682181662820 ? UF_CRM_1682181662820[0]:'',
    cpfcnpj:UF_CRM_1682023974755 || ''
  }

  return formatedData
}

module.exports = formatDataCompany