class List {
  constructor() {
    this.length = 0;
    this.node = null;
  }

  genNode(data) {
    let element = this.node;
    for (let index = 0; index < this.length; index++) {
      if (!Object.keys(element.next).length) {
        element.next = { data, next: {} };
      }
      element = element.next;
    }
  }

  delLast() {
    let current = this.node;
    for (let index = 0; index < this.length; index++) {
      if (index === this.length - 2) {
        current.next = {};
        this.length -= 1;
      } else {
        current = current.next;
      }
    }
    return this;
  }

  addFirst(data) {
    this.node = { data, next: this.node };
    this.length += 1;
    return this;
  }

  delFirst() {
    this.node = this.node.next;
    this.le -= 1;
    return this;
  }

  add(data) {
    if (!this.length) {
      this.node = { data, next: {} };
      this.length += 1;
      return this;
    }
    this.genNode(data);
    this.length += 1;
    return this;
  }
}

const list = new List();
list.add(3).add(4).add(5).delLast().addFirst(2).delFirst();

console.dir({ nodes: list.node });
