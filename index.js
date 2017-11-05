function produceDrivingRange(blockRange) {
  return (possible = function(start, end) {
    this.start = parseInt(start.slice(0, -2));
    this.end = parseInt(end.slice(0, -2));
    const tripDistance = Math.abs(this.start - this.end);
    if (blockRange > tripDistance) {
      return `within range by ${blockRange - tripDistance}`;
    } else {
      return `${tripDistance - blockRange} blocks out of range`;
    }
  });
}

function produceTipCalculator(tipPercentage) {
  return function(total) {
    return total * tipPercentage;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  };
}
