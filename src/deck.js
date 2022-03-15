'use strict';

class Deck {
  constructor(storage) {
    this.storage = storage;
    this.cards = [];
    this.size = 0;
  }

  async init() {
    this.cards = await this.storage.read();
    this.size = this.cards.length;
    console.log(`Deck ready! deck size id ${this.size}`);
  }

  getRandom() {
    const cardIndex = Math.floor(Math.random() * this.size);
    return this.cards[cardIndex];
  }
  async addCard(card) {
    // TODO validator
    this.cards.push(card);
    this.size = this.cards.length;
    await this.storage.append(card);
    console.log(`New card added`);
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
