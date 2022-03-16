'use strict';

const MainMenuState = require('./mainMenu.js');
const PlayingState = require('./playing.js');
const SuccessState = require('./success.js');

const states = {};

states['MainMenuState'] = new MainMenuState();
states['PlayingState'] = new PlayingState();
states['SuccessState'] = new SuccessState();

module.exports = { states };
