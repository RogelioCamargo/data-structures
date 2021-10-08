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

  // describe("#shift", () => {
  //   test("removes element at the beginning of list", () => {
  //     // let ll = new DoublyLinkedList();
  //     // ll.unshift("Roger"); // Roger -> NULL
  //     // ll.unshift("Juan"); // Juan -> Roger -> NULL
  //     // ll.unshift("Ade"); // Ade -> Juan -> Roger -> NULL
  //     // ll.shift(); // Juan -> Roger -> NULL
  //     // expect(ll.head.data).toEqual("Juan");
  //     // expect(ll.tail.data).toEqual("Roger");
  //     // expect(ll.at(0)).toEqual("Juan");
  //     // expect(ll.size).toBe(2);

  //     // ll.shift(); // Roger -> NULL
  //     // expect(ll.head.data).toEqual("Roger");
  //     // expect(ll.tail.data).toEqual("Roger");
  //     // expect(ll.at(0)).toEqual("Roger");
  //     // expect(ll.size).toBe(1);

  //     // ll.shift(); // NULL
  //     // expect(ll.at(0)).toBeNull();
  //     // expect(ll.size).toBe(0);
  //   });
  // });

  // describe("#pop", () => {
  //   test("removes element at the end of list", () => {
  //     // let ll = new DoublyLinkedList();
  //     // ll.push("Roger"); // Roger -> NULL
  //     // ll.push("Ade"); // Roger -> Ade -> NULL
  //     // ll.push("Juan"); // Roger -> Ade -> Juan -> NULL
  //     // expect(ll.pop()).toEqual("Juan"); // Roger -> Ade -> NULL
  //     // expect(ll.head.data).toEqual("Roger");
  //     // expect(ll.tail.data).toEqual("Ade");
  //     // expect(ll.at(1)).toEqual("Ade");
  //     // expect(ll.size).toBe(2);

  //     // expect(ll.pop()).toEqual("Ade"); // Roger -> NULL
  //     // expect(ll.head.data).toEqual("Roger");
  //     // expect(ll.tail.data).toEqual("Roger");
  //     // expect(ll.at(0)).toEqual("Roger");
  //     // expect(ll.size).toBe(1);

  //     // expect(ll.pop()).toEqual("Roger"); // NULL
  //     // expect(ll.at(0)).toBeNull();
  //     // expect(ll.size).toBe(0);
  //   });
  // });

  // describe("#removeAt", () => {
  //   test("removes an element at the specifed index", () => {
  //     // let ll = new DoublyLinkedList();
  //     // ll.push("Roger"); // Roger -> NULL
  //     // ll.push("Ade"); // Roger -> Ade -> NULL
  //     // ll.push("Juan"); // Roger -> Ade -> Juan -> NULL;
  //     // ll.push("Emma"); // Roger -> Ade -> Juan -> Emma -> NULL;

  //     // expect(ll.at(1)).toEqual("Ade");
  //     // expect(ll.removeAt(1)).toEqual("Ade"); // Roger -> Juan -> Emma -> NULL;
  //     // expect(ll.at(1)).toEqual("Juan");

  //     // expect(ll.at(2)).toEqual("Emma");
  //     // expect(ll.removeAt(2)).toEqual("Emma"); // Roger -> Juan -> NULL
  //     // expect(ll.at(1)).toEqual("Juan");
  //     // expect(ll.at(2)).toBeNull();

  //     // expect(ll.at(0)).toEqual("Roger");
  //     // expect(ll.removeAt(0)).toEqual("Roger"); // Juan -> NULL;

  //     // expect(ll.removeAt(0)).toEqual("Juan"); // NULL;
  //   });
  // });

  // describe("#isEmpty", () => {
  //   test("checks if the list is empty", () => {
  //     // let ll = new DoublyLinkedList();
  //     // ll.push("Roger"); // Roger -> NULL

  //     // expect(ll.isEmpty()).toBe(false);

  //     // ll.pop();

  //     // expect(ll.isEmpty()).toBe(true);
  //   });
  // });

  // describe("#indexOf", () => {
  //   test("checks if the list is empty", () => {
  //     // let ll = new DoublyLinkedList();
  //     // ll.push("Roger"); // Roger -> NULL
  //     // ll.push("Ade"); // Roger -> Ade -> NULL
  //     // ll.push("Juan"); // Roger -> Ade -> Juan -> NULL

  //     // expect(ll.indexOf("Roger")).toBe(0);
  //     // expect(ll.indexOf("Juan")).toBe(2);
  //     // expect(ll.indexOf("Jorge")).toBeNull();

  //     // ll.clear();
  //   });
  // });
});
