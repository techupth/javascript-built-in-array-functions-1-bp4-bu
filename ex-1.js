let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  let count = []
  count = words.map((x) => x.length)
  return count;

}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
