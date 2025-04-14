var MyHashSet = function () {
  this.size = 1000;
  this.data = new Array(this.size).fill([]);
};

MyHashSet.prototype.hash = function (key) {
  return key % this.size;
};

MyHashSet.prototype.add = function (key) {
  const index = this.hash(key);
  if (!this.data[index].includes(key)) {
    this.data[index].push(key);
  }
};

MyHashSet.prototype.remove = function (key) {
  const index = this.hash(key);
  const keyIndex = this.data[index].indexOf(key);
  if (keyIndex !== -1) {
    this.data[index].splice(keyIndex, 1);
  }
};

MyHashSet.prototype.contains = function (key) {
  const index = this.hash(key);
  return this.data[index].includes(key);
};
