'use strict';

const fs = require('fs');

const split = (splitter) => (str) => str.split(splitter);

const ROW_SPLITTER = '\n';
const KEYS_SPLITTER = '|';

class Storage {
  async read() {
    return [];
  }
  async append() {}
}

class FileStorage extends Storage {
  constructor(path) {
    super();
    this.path = path;
  }

  async read() {
    const data = await fs.promises.readFile(this.path, 'utf8');

    return data
      .split(ROW_SPLITTER)
      .filter((row) => row !== '')
      .map(split(KEYS_SPLITTER))
      .map(this.cardFromRow);
  }
  async append(card) {
    const row = this.rowFromCard(card);
    await fs.promises.appendFile(this.path, `${row}${ROW_SPLITTER}`);
  }

  cardFromRow = ([english, russian, description]) => ({
    english,
    russian: russian.split(','),
    description,
  });

  rowFromCard = (card) =>
    this.keys.reduce((acc, key) => [...acc, card[key]], '').join(KEYS_SPLITTER);
}

module.exports = {
  FileStorage,
};
