'use strict';

class Deck {
  constructor(storage) {
    this._storage = storage;
    this._cards = [];
    this._size = 0;
  }

  async init() {
    this._cards = await this._storage.read();
    this._size = this._cards.length;
  }

  async addCard(card) {
    // TODO validator
    this._cards.push(card);
    this._size = this._cards.length;
    await this._storage.append(card);
  }

  getCards() {
    return this._cards;
  }
}

const createDeck = async (storage) => {
  const deck = new Deck(storage);
  await deck.init();
  return deck;
};

module.exports = {
  createDeck,
};
