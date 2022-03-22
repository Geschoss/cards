'use strict';

class FSM {
  constructor({ states }) {
    this.states = states;
  }

  update() {
    this.state.execute(this);
  }

  changeState(newStateName) {
    const state = this.states[newStateName];
    this.state.exit(this);
    this.state = state;
    this.state.enter(this);
  }
}

module.exports = FSM;
