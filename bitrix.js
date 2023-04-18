// <script src="//api.bitrix24.com/api/v1/"></script>
// const BX24 = require('./bitrixApiV1') 
BX24.init(function(){
  console.log('Init done!', BX24.isAdmin());
});
console.log(BX24.getAuth());
