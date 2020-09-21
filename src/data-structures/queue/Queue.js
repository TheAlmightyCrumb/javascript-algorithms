export default class Queue {
  constructor() {
    this.capacity = 50;
    this.data = new Array(this.capacity);
    this.startIndex = 0;
    this.endIndex = 0;
  }

  enqueue(item) {
    // this.data.push(item);
    // this.data = [...this.data, item];
    // Reached the capacity, double it!
    if (this.size === this.capacity) {
      const prevData = this.data;
      const prevCapacity = this.capacity;
      this.capacity *= 2;
      this.data = new Array(this.capacity);
      let j = 0;
      for (let i = this.startIndex; i != this.endIndex; i = (i+1)%prevCapacity) {
        this.data[j++] = prevData[i];
      }
    }
    this.data[this.endIndex++] = item;
    this.endIndex = (this.endIndex + 1) % this.capacity;
  }

  get size() {
    if (this.endIndex > this.startIndex) {
      return this.endIndex - this.startIndex;
    }
    return this.capacity - (this.startIndex - this.endIndex);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    // const [first, ...restOfData] = this.data;
    // this.data = restOfData;
    // return first;
    const item = this.data[this.startIndex++];
    return item;
    // return this.isEmpty() ? null : this.data.shift();
  }

  peek() {
    return this.isEmpty() ? null : this.data[startIndex];
  }

  isEmpty() {
    return this.startIndex === this.endIndex;
  }

  toString(stringifier = x => x) {
    // return this.data.map(stringifier).toString();
    let str = "";
    for (let i = this.startIndex; i < this.endIndex; i++) {
      str += stringifier(this.data[i]) + ",";
    }
    return str.slice(0,-1);
  }
}
