class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    // i removed the if condition as we do  this.items.push(item) we are already putting one element only 
    this.items.push(item);
    this.length++;

    this.items.sort((a, b) => a - b);
  }


  get(pos) {
    if (pos > this.length || pos < 0) throw new Error("OutOfBounds");
    else {
      //  (ps : no need for getting index as index is alreay the position passed to the fnction )
      return this.items[pos]
    }
  }
  // mde use of the sorted array way to get the last element (that is the biggest)
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
