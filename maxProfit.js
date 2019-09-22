const assertEqual = function(actual, expected) {
  let msg;

  if (actual === expected) {
    msg = `👍👍👍Assertion Passed: ${actual} === ${expected}👍👍👍`;
  } else {
    msg = `☢☢☢Assertion Failed: ${actual} !== ${expected}☢☢☢`;
  }

  console.log(msg);
};

const maxFrom = function(arr, index) {
  return Math.max(...arr.slice(index));
};

const maxProfit = function(prices, low) {
  let lastIndex = prices.length - 1;
  let futurePivot = low + 1;

  if (low < lastIndex - 2) {
    let currentBest = maxFrom(prices, futurePivot) - prices[low] || -1;
    return Math.max(currentBest, maxProfit(prices, futurePivot));
  } else if (low < lastIndex) {
    return Math.max(prices[lastIndex] - prices[low], -1);
  } else {
    return -1;
  }
};

assertEqual(maxProfit([45, 24, 35, 31, 40, 38, 11], 0), 16);
assertEqual(maxProfit([50, 50, 30, 20, 10], 0), -1);
assertEqual(maxProfit([50, 40, 30, 20, 10], 0), -1);
