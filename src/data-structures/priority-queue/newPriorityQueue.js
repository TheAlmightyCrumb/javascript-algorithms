export default class PriorityQueue{
  constructor() {
    this.collection = [];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  add(item, priority = 0) {
    if(this.isEmpty()) {
      return this.collection = [[item, priority]];
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][1] <= priority) {
        this.collection.splice(i, 0, [item, priority]);
        return this.collection;
      }
      if (i === this.collection.length - 1) {
        this.collection.push([item, priority]);
        return this.collection;
      }
    }
    return null;
  }

  peek() {
    console.log(this.collection);
    return this.isEmpty() ? null : this.collection[this.collection.length - 1][0];
  }

  poll() {
    return this.isEmpty() ? null : this.collection.pop()[0];
  }

  changePriority(item, priority = 0) {
    if(this.isEmpty()) {
      return null;
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][0] === item) {
        this.collection.splice(i, 1);
        this.add(item, priority);
        return this.collection;
      }
    }
    return null;
  }

  hasValue(item) {
    if(this.isEmpty()) {
      return false;
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][0] === item) {
        return true;
      }
    }
    return false;
  }

}
