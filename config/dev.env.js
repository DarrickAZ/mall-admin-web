'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //访问后台admin的地址
  BASE_API: '"http://localhost:10010"'
})
