const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

const { companyController } = require('./src/company/controller')

app.get('/', companyController)

app.use(cors())
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

