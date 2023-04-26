require('dotenv').config();
const axios = require('axios')


const API = axios.create({
  baseURL: process.env.BT_URL,
  timeout: 10000,
  headers: {}
});

module.exports=API