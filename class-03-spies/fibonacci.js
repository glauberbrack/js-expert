class Fibonacci {
  *execute(input, current = 0, next = 1) {
    if (input === 0) {
      return 0;
    }

    // return values
    yield current;

    // call function, but do not returns any value
    yield* this.execute(input - 1, next, current + next);
  }
}

module.exports = Fibonacci;
