'use strict';

const array = {
  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    return arr;
  },
};

module.exports = array;
