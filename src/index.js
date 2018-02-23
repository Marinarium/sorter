class Sorter { 
	constructor() { 
		this.arrayOfElements = [];
	}
	
	add(element) {
		this.arrayOfElements.push(element);
	}
	
	at(index) {
		return this.arrayOfElements[index];
	}
	
	get length() {
		return this.arrayOfElements.length;
	}
	
	toArray() {
		return this.arrayOfElements;
	}
	
	sort() {
		this.arrayOfElements.sort(compareNumbers);
		function compareNumbers(a, b) {
			if (a > b) return 1;
			if (a < b) return -1;
		}
	}
}
 /* setComparator(compareFunction) {
    // your implementation
  }*/

module.exports = Sorter;
