'use strict';

require('dotenv').config();
require('babel-polyfill');
require('babel-register');

require('./src/server.js').startDB(process.env.PORT);

