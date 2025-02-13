export class StorageCase {
  constructor(capacity) {
    this.capacity = capacity;
  }

  getStorageArray() {
    const storageArray = [];
    for (let i = 0; i < this.capacity; i++) {
      const subArray = [];
      storageArray.push(subArray);
    }
    return storageArray;
  }
}
