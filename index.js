'use strict';

require('dotenv').config();
require('babel-polyfill');
require('babel-register');

require('./src/server.js').start(process.env.PORT);

