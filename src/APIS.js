require('dotenv').config();
const axios = require('axios')


const BtApi = axios.create({
  baseURL: process.env.BT_URL,
  timeout: 10000,
  headers: {}
});

const PTInstance = axios.create({
  baseURL: process.env.PT_URL,
  timeout: 10000,
  headers: {}
});

module.exports = {BtApi}

