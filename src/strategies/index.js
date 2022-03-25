'use strict';
const AllStrategy = require('./all.js');
const SomeStrategy = require('./some.js');
const TimeStrategy = require('./time.js');

const all = new AllStrategy();
const some = new SomeStrategy();
const time = new TimeStrategy();

const strategies = [all, some, time];

module.exports = { strategies };
