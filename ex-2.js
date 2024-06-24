let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  let moreFive = words.filter((x) => {return x.length>=5});
  return moreFive;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]


