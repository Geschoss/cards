const line = [
  'dictionary',
  'словарь',
  'source in print or electronic form containing words usually alphabetically arranged along with information about their forms',
];

const keys = ['english', 'russian', 'description'];

const card = {
  english: 'through',
  russian: 'через',
  description:
    'used as a function word to indicate movement into at one side or point and out at another and especially the opposite side of',
};

keys.reduce((acc, key, index) => ([...acc, card[key]]), '').join(','); /* ?*/

'sdf'.slice(0, -1) /* ? */