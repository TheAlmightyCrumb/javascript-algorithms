export default class Stack {
  constructor() {
    this.size = 50;
    this.data = new Array(this.size);
    this.index = 0;
  }

  push(item) {
    // [1, 2]
    // this.data.unshift(item);
    this.data[this.index++] = item;
    if (this.index === this.size) {
      this.size = this.size * 2;
      const data = this.data;
      this.data = new Array(this.size);
      for (let i = 0; i < data.length; i++) {
        this.data[i] = data[i];
      }
    }
  }

  peek() {
    // return this.isEmpty() ? this.data[0] : null
    return this.isEmpty() ? null : this.data[this.index-1];
  }

  pop() {
    // return this.isEmpty() ? null : this.data.shift();
    return this.isEmpty() ? null : this.data[--this.index];
  }

  toString(stringifier = x => x) {
    const str = '';
    for (let i = 0; i < this.index; i++) {
      str = stringifier(this.data[i]) + ',' + str;
    }
    return str.slice(0, -1);
  }

  isEmpty() {
    return this.index === 0;
  }

  toArray() {
    return this.data.slice(0, this.index).reverse();
  }
}
