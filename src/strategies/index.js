'use strict';
const AllStrategy = require('./all.js');

const all = new AllStrategy();

const strategies = [all];

module.exports = { strategies };
