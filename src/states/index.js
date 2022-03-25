'use strict';

const MainMenuState = require('./mainMenu.js');
const PlayingState = require('./playing.js');
const SuccessState = require('./success.js');
const ReadEnglishState = require('./readEnglishState.js');
const ReadRussainState = require('./readRussainState.js');
const ReadDescriptionState = require('./readDescriptionState.js');
const EndingState = require('./endingState.js');
const AddCardState = require('./addCard.js');
const ShowDeckState = require('./showDeck');
const SelectStrategyState = require('./selectStrategy');
const GameOverState = require('./gameOver.js');

const states = {};

states['MainMenuState'] = new MainMenuState();

states['ShowDeckState'] = new ShowDeckState();

states['SelectStrategyState'] = new SelectStrategyState();

states['PlayingState'] = new PlayingState();
states['SuccessState'] = new SuccessState();

states['GameOverState'] = new GameOverState();

states['AddCardState'] = new AddCardState();
states['ReadEnglishState'] = new ReadEnglishState();
states['ReadRussainState'] = new ReadRussainState();
states['ReadDescriptionState'] = new ReadDescriptionState();
states['EndingState'] = new EndingState();

module.exports = { states };
