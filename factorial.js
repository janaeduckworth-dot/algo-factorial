/**
 * Calculates the factorial of a non-negative integer using an iterative approach.
 * @param {number} n The non-negative integer.
 * @returns {number} The factorial of n.
 */
const factorial = (n) => {
  // Factorials are only defined for non-negative integers.
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }

  // Edge case: 0! is defined as 1.
  if (n === 0) {
    return 1;
  }

  let total = 1; // start with 1, the neutral element for multiplication

  for (let i = n; i > 0; i--) {
    total *= i; // multiply total by current number
  }

  return total;
};

// Example test cases:
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

