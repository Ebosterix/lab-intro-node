class SortedList {
  constructor() {
    this.length = 0
    this.items = []
  }

  add(item) {
    this.items.push(item)
    this.length += 1
    this.items.sort(function (a, b) {
      return a - b;
    })
  }

  get(pos) {
    if (pos < this.length) { return this.items[pos] }
    else { throw new Error('OutOfBounds') }
  }



  max() {

    if (this.length > 0) { return Math.max(...this.items) }
    else { throw new Error('EmptySortedList'); }

  }

  min() {

    if (this.length > 0) { return Math.min(...this.items) }
    else { throw new Error('EmptySortedList'); }

  }

  sum() {
    var total = 0;

    for (var i = 0; i < this.items.length; i++) {

      total += this.items[i];

    }
    return total
  }

  avg() {

    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      var total = 0;
      for (var i = 0; i < this.items.length; i++) {
        total += this.items[i];
      }
      var avg = total / this.items.length;
      return avg
    }

  }

}

module.exports = SortedList;
