class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    // i removed the if condition as we do  this.items.push(item) we are already putting one element only
    this.items.push(item);
    this.length++;

    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    this.checkForErrors(pos);
    //  (ps : no need for getting index as index is alreay the position passed to the fnction )
    return this.items[pos];
  }
  // mde use of the sorted array way to get the last element (that is the biggest)
  max() {
    this.checkForErrors();
    //const sorted = this.items.sort((a, b) => a - b);
    return this.get(this.length - 1);
  }

  min() {
    this.checkForErrors();
    return this.get(0); // minimum value is always the first element
  }

  sum() {
    if (this.length == 0) return 0;
    return this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }

  avg() {
    this.checkForErrors();
    return this.sum() / this.length;
  }

  checkForErrors(index) {
    if (index == undefined) {
      if (this.length == 0) throw new Error("EmptySortedList");
    } else if (index > this.length || index < 0) throw new Error("OutOfBounds");
  }
}

module.exports = SortedList;
