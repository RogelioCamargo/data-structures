const DoublyLinkedList = require("../data-structures/DoublyLinkedList");

describe("DoublyLinkedList", () => {
  describe("#unshift", () => {
    test("adds a new element at the beginning of list", () => {
      let dll = new DoublyLinkedList();
      dll.unshift(1);
      dll.unshift(2);
      dll.unshift(3); // 3 -> 2 -> 1 -> NULL

      expect(dll.head.data).toBe(3);
      expect(dll.tail.data).toBe(1);

      expect(dll.at(1).prev.data).toBe(3);
      expect(dll.at(1).data).toBe(2);
      expect(dll.at(1).next.data).toBe(1);

      expect(dll.size).toBe(3);
      dll.clear();
    });
  });

  describe("#push", () => {
    test("adds a new element at the end of list", () => {
      let dll = new DoublyLinkedList(); 
      dll.push(1); 
      dll.push(2); 
      dll.push(3); // 1 -> 2 -> 3 -> null

      expect(dll.head.data).toBe(1); 
      expect(dll.tail.data).toBe(3);

      expect(dll.at(1).prev.data).toBe(1); 
      expect(dll.at(1).data).toBe(2); 
      expect(dll.at(1).next.data).toBe(3); 

      expect(dll.size).toBe(3);
      dll.clear();
    });
  });

  describe("#insertAt", () => {
    test("adds a new element at the specifed index", () => {
      let dll = new DoublyLinkedList();
      dll.insertAt(1, 0);
      dll.insertAt(2, 1);
      dll.insertAt(3, 1); // 1 -> 3 -> 2 -> NULL

      expect(dll.head.data).toBe(1);
      expect(dll.tail.data).toBe(2);

      expect(dll.at(1).prev.data).toBe(1);
      expect(dll.at(1).data).toBe(3);
      expect(dll.at(1).next.data).toBe(2);

      expect(dll.size).toBe(3);
      dll.clear();
    });
  });

  describe("#shift", () => {
    test("removes element at the beginning of list", () => {
      let dll = new DoublyLinkedList();
      dll.unshift(1);
      dll.unshift(2);
      dll.unshift(3);
      dll.unshift(4); // 4 -> 3 -> 2 -> 1 -> NULL

      expect(dll.shift()).toBe(4); // 3 -> 2 -> 1 -> NULL

      expect(dll.at(1).prev.data).toBe(3);
      expect(dll.at(1).data).toBe(2);
      expect(dll.at(1).next.data).toBe(1);

      expect(dll.shift()).toBe(3); // 2 -> 1 -> NULL

      expect(dll.at(0).prev).toBeNull();
      expect(dll.at(0).data).toBe(2);
      expect(dll.at(0).next.data).toBe(1);

      expect(dll.shift()).toBe(2);
      expect(dll.shift()).toBe(1);

      dll.clear();
    });
  });

  describe("#pop", () => {
    test("removes element at the end of list", () => {
      let dll = new DoublyLinkedList();
      dll.push(1);
      dll.push(2);
      dll.push(3);
      dll.push(4); // 1 -> 2 -> 3 -> 4 -> NULL

      expect(dll.pop()).toBe(4); // 1 -> 2 -> 3 -> NULL

      expect(dll.at(1).prev.data).toBe(1);
      expect(dll.at(1).data).toBe(2);
      expect(dll.at(1).next.data).toBe(3);

      expect(dll.pop()).toBe(3); // 1 -> 2 -> NULL

      expect(dll.at(1).prev.data).toBe(1); 
      expect(dll.at(1).data).toBe(2);
      expect(dll.at(1).next).toBeNull(); 

      dll.clear();
    });
  });

  describe("#removeAt", () => {
    test("removes an element at the specifed index", () => {
      let dll = new DoublyLinkedList();
      dll.push(1);
      dll.push(2);
      dll.push(3);
      dll.push(4); // 1 -> 2 -> 3 -> 4 -> NULL

      expect(dll.removeAt(2)).toBe(3); // 1 -> 2 -> 4 -> NULL

      expect(dll.at(1).prev.data).toBe(1);
      expect(dll.at(1).data).toBe(2);
      expect(dll.at(1).next.data).toBe(4);

      dll.clear(); 
    });
  });
});
