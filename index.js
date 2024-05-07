class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length++
    if (this.length != 0) {
      this.items.sort()
    }

  }

  get(pos) { }

  max() { }

  min() { }

  sum() { }

  avg() { }
}

module.exports = SortedList;
