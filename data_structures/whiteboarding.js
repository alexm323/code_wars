function binarySearch(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        // instead of hardcoding the array length we are getting the average of the left and the right to find the middle index
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx]
        if (middleVal < val) {
            leftIdx = middleIdx + 1
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1
        } else {
            return middleIdx
        }
    }
    // if we break out of that loop and we didnt find it
    return -1
}

/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained together nodes. */
  
  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
      const newNode = new Node(val);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      } else{
        this.tail.next = newNode;
      this.tail = newNode;
      }
      // didnt realize the length was a value that we made in the constructor at first so I was racking my brain trying to figure out why the node was changed but the length was not 
      this.length += 1;
  
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
      const newHead = new Node(val);
      if(!this.head){
        this.head = newHead;
        this.tail = newHead;
      } else{
        // kept writing this backwards
        newHead.next = this.head
        this.head = newHead;
      }
      this.length += 1;
  
    }
    
        /** insertAt(idx, val): add node w/val before idx. */
  
        insertAt(idx, val) {
            if (idx < 0 || idx > this.length){
              return null
            } else if(idx === 0){
              return this.unshift(val);
            } else if(idx === this.length){
              return this.push(val)
            } else  {
              let previousNode = this.getNodeAt(idx - 1);
              let newNode = new Node(val);
              newNode.next = previousNode.next;
              previousNode.next = newNode;
              this.length +=1;
            }
          }

    /** pop(): return & remove last item. */
  
    pop() {
      if(!this.length){
        return null;
      } else{
        let currentNode = this.head;
        let previousNode = this.head
        while(currentNode.next){
          previousNode = currentNode
          currentNode = currentNode.next;
        
        }
      previousNode.next = null;
      this.tail = previousNode;
      // console.log('End of the line')
      this.length -= 1;
      
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return currentNode.val;
      }
      
      
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
      if(!this.head){
        return null;
      } else{
        const removeNode = this.head;
        this.head = this.head.next;
        this.length -=1;
  
        if(!this.length){
          this.tail = null;
        }
  
        return removeNode.val;
      }
    }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
      if (idx < 0 || idx >= this.length){
        return null;
      } else{
        let currentNode = this.head;
        let count = 0;
  
        while(count < idx){
          currentNode = currentNode.next;
          count +=1;
        }
        return currentNode.val;
      }
  
    }
    getNodeAt(idx) {
      if (idx < 0 || idx >= this.length){
        return null;
      } else{
        let currentNode = this.head;
        let count = 0;
  
        while(count < idx){
          currentNode = currentNode.next;
          count +=1;
        }
        return currentNode;
      }
  
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
      let currentNode = this.getNodeAt(idx);
      if (currentNode) {
  
        currentNode.val = val;
  
        return currentNode;
      } else {
        return null;
      }
    }
  

  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {
      if (idx < 0 || idx >= this.length){
        return null
      } else if(idx === 0){
        return this.shift();
      } else if(idx === this.length -1){
        return this.pop()
      } else  {
        let previousNode = this.getNodeAt(idx - 1);
        let removeNode = previousNode.next;
        previousNode.next = removeNode.next;
        
        this.length +=1;
        return removeNode.val;
      }
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
      if (this.length === 0) return 0;
  
      let total = 0;
      let current = this.head;
  
      while (current) {
        total += current.val;
        current = current.next;
      }
  
      return total / this.length;
    }
  }

  function exclusiveMult(array){
    let resultArray = [], product;
    for(let i = 0; i < array.length; i++){
      product = 1;
      for(let j = 0; j < array.length; j++){
         if(i !== j) product *= array[j];
      }
      resultArray.push(product);
    }
    return resultArray;
}


// Sample data
var array = [1,2,3,4];
console.log(productOfArrayExceptSelf(array));

function productOfArrayExceptSelf(array){
    return array.map(function (_, i) {
        return array.reduce(function (product, val, j) {
            return product * (i === j ? 1 : val);
        }, 1);
    });
}

var array = [1,2,3,4];
console.log(productOfArrayExceptSelf(array));