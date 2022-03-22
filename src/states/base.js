'use strict';

class BaseState {
  enter() {}
  execute() {}
  exit() {}
}
const printDraft = (game) => {
  const { english, russian, description } = game.draft;
  game.write(`\nenglish: ${english}\n`);
  game.write(`russian: ${russian}\n`);
  game.write(`description: ${description}\n`);
};

module.exports = { BaseState, printDraft };
