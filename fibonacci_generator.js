function fibonacciGenerator(num) {
    fibonacciArray = [0, 1]
    var previous = 0;
    var next = 1;
    for (var i = 2; i <= num; i++) {
        var current = previous + next;
        fibonacciArray.push(current);
        previous = next;
        next = current;
    }
    return fibonacciArray;
}
