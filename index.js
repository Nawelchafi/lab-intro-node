class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.length++;

    this.items.sort((a, b) => a - b);
  }


  get(pos) {
    if (pos > this.length) throw new Error("OutOfBounds");
    else {
      return this.items.getIndex(pos)
    }
  }

  max() { }

  min() { }

  sum() { }

  avg() { }
}

module.exports = SortedList;
