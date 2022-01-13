const testNumber = '5556440596';
const testFormat = 'XXX-XXX-XXXX';
const testBlocks = [3, 3, 4];

const splitIntoBlocks = (rawValue = testNumber, blocks = testBlocks) => {
  let acc = 0;
  const digitBlocks = blocks.map((range, i) => {
    acc += blocks[i - 1] || 0;
    return rawValue.substring(acc, acc + range);
  });
  const totalRange = acc + blocks[blocks.length - 1];
  const extra =
    totalRange < rawValue.length ? rawValue.substring(totalRange) : undefined;
  console.log(`digitBlocks: `, { digitBlocks });
  return { digitBlocks, extra };
};

const generateOptionsFromString = stringFormat => {
  const blocks = stringFormat.matchAll(/X+/g).map(block => block.length);
  const delimiters = stringFormat.match(/[^X]+/g);
  return { blocks, delimiters };
};

const formatPhoneNumber = (number = testNumber, format = testFormat) => {
  const formatBlocks = Array.from(format.matchAll(/X+/g));
  const delimiters = Array.from(format.matchAll(/[^X]+/g));
  const ranges = formatBlocks.map(({ length }) => length);
  const blocks = splitIntoBlocks(number, ranges);
  console.log({ blocks });
  // const matches = [...blocks, ...delimiters];
  // matches.sort(({ index: a }, { index: b }) => {
  //   return a - b;
  // });
  // console.log(`matches: `, matches);
};

const formatForDisplay = phone => {
  return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
};

export { formatPhoneNumber, splitIntoBlocks, formatForDisplay };
