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
    if (pos > this.length || pos < 0) throw new Error("OutOfBounds");
    else {
      // directly return the item of a given position (no need for getting index as index is alreay the position passed to the fnction )
      return this.items[pos]
    }
  }

  max() {
    if (this.length == 0) throw new Error("EmptySortedList");
    else {
      const sorted = this.items.sort((a, b) => a - b);
      return sorted[sorted.length - 1]
        ;


    }
  }


  min() { }

  sum() { }

  avg() { }
}

module.exports = SortedList;
