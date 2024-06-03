function* fibonacciGenerator(startIndex = 0, endIndex = Infinity) {
  let [prev, curr] = [0, 1];
  let index = 0;
  while (index < endIndex) {
    if (index >= startIndex) {
      yield curr;
    }
    [prev, curr] = [curr, prev + curr];
    index++;
  }
}
