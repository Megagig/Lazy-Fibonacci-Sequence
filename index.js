function* fibonacciGenerator(startIndex = 0, endIndex = Infinity) {
  // Cache for previously calculated Fibonacci numbers
  const cache = {};

  // Closure to store the state of the sequence (previous two numbers)
  function fibonacci(n) {
    if (n <= 1) return n;
    if (n in cache) return cache[n];

    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = result;
    return result;
  }

  let currentIndex = startIndex;
  while (currentIndex <= endIndex) {
    yield fibonacci(currentIndex);
    currentIndex++;
  }
}

// Example usage
const sequence = fibonacciGenerator(5, 10);
for (let i = 0; i < 6; i++) {
  console.log(sequence.next().value);
}
