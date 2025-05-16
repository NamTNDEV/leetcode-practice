var ListNode = function (val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new ListNode(val);
  newNode.next = this.head;
  this.head = newNode;
  if (this.length === 0) this.tail = newNode;
  this.length++;
};
/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new ListNode(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.length) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.length) return this.addAtTail(val);

  const newNode = new ListNode(val);
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  newNode.next = curr.next;
  curr.next = newNode;
  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.length) return;
  if (index === 0) {
    this.head = this.head.next;
    if (this.length === 1) this.tail = null;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    const removedNode = curr.next;
    curr.next = removedNode.next;
    if (removedNode === this.tail) this.tail = curr;
  }
  this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
