class Sorter { 
	constructor() { 
		this.arrayOfElements = [];
		this.compareFunction = (right, left) => right - left;
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
	
	sort(){
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
 /* setComparator(compareFunction) {
    // your implementation
  }*/

module.exports = Sorter;
