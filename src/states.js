'use strict';

const states = {};

class State {
  enter() {}
  execute() {}
  exit() {}
}

class PlayingState extends State {
  enter(game) {
    game.clear();
    game.write('Playing\n');
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case 'q':
        game.process.exit();
        break;
    }
    console.log({ sequence });
  }
}

class MainMenuState extends State {
  enter(game) {
    game.clear();
    game.write('Main menu:\n');
    game.write('1: Play\n');
    game.write('2: Add new card\n');
    game.write('q: Exit\n');
  }
  execute(game) {
    const { sequence } = game.input;

    switch (sequence) {
      case 'q':
        game.process.exit();
        break;
      case '1':
        game.changeState(states['PlayingState']);
        break;
    }
  }
}

states['MainMenuState'] = new MainMenuState();
states['PlayingState'] = new PlayingState();

module.exports = { states };
