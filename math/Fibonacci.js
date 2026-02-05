class Fibonacci {
  constructor() {}
  static calculateFibonacci(number) {
    if (number === 0) {
      return 0;
    } else if (number == 1) {
      return 1;
    } else {
      return (
        this.calculateFibonacci(number - 1) +
        this.calculateFibonacci(number - 2)
      );
    }
  }
}

module.exports = Fibonacci;
