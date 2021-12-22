const capAll = string => {
  const all = string
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
  return all;
};

export { capAll };
