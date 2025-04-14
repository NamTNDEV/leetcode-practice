var MyHashMap = function () {
  this.size = 1009;
  this.map = new Array(this.size).fill(null).map(() => []);
};

MyHashMap.prototype._hash = function (key) {
  return key % this.size;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hashKeyIndex = this._hash(key);
  const bucket = this.map[hashKeyIndex];
  const existingIndex = bucket.findIndex(([k]) => k === key);
  if (existingIndex !== -1) {
    bucket[existingIndex][1] = value; // Update existing key
  } else {
    bucket.push([key, value]); // Add new key-value pair
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hashKeyIndex = this._hash(key);
  const bucket = this.map[hashKeyIndex];
  return bucket.find(([k]) => k === key)
    ? bucket.find(([k]) => k === key)[1]
    : -1; // Return value or -1 if not found
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hashKeyIndex = this._hash(key);
  const bucket = this.map[hashKeyIndex];
  const indexToRemove = bucket.findIndex(([k]) => k === key);
  if (indexToRemove !== -1) {
    bucket.splice(indexToRemove, 1); // Remove the key-value pair
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
