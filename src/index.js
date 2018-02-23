class Sorter {
  constructor() {
    this.arrayOfElemnts = [];
    this.compareFunction = (right, left) => right - left;
  }

  add(element) {
    this.arrayOfElemnts.push(element);
  }

  at(index) {
    return this.arrayOfElemnts[index];
  }

  get length() {
    return this.arrayOfElemnts.length;
  }

  toArray() {
    return this.arrayOfElemnts;
}

  sort(indices) {
    indices.sort(this.compareFunction);
    
    var array = [];
    for (let i = 0; i < indices.length; i++) {
      array.push(this.arrayOfElemnts[indices[i]]);
    }
    array.sort(this.compareFunction);
    
    for (let i = 0; i < array.length; i++) {
      this.arrayOfElemnts[indices[i]] = array[i];
    }
  }
}
module.exports = Sorter;
