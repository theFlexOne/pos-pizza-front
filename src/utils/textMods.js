const capAll = string => {
  const all = string
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
  return all;
};

const toMoneyString = num => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
};

export { capAll, toMoneyString };
