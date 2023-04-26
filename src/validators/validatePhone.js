function validate(phone='') {
  // Regular expression pattern for phone numbers
  var phonePattern = /^(\+|\d)[\d\s.-]{7,}$/

  var strippedNumber = phone.replace(/[^\d]+/g,'')

  if (phonePattern.test(strippedNumber)) 
    return true
  return false
}

module.exports = validate