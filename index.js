const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

const validateLead = require('./validators/validateData')

app.get('/', (req, res) => {
  const data = req.query
  const validatedData = validateLead(data)
  res.send({validatedData})
})

app.use(cors())
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

