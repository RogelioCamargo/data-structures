const LinkedList = require("../LinkedList"); 

describe("LinkedList", () => {
  describe("#unshift", () => {
    test("adds a new element at the beginning of list", () => {
      let ll = new LinkedList();
      ll.unshift("Roger"); // Roger -> NULL
      ll.unshift("Ade"); // Ade -> Roger -> NULL

      // start at first node
      let current = ll.head;
      expect(current.data).toEqual("Ade");
      // move to the second node
      current = current.next;
      expect(current.data).toEqual("Roger");
      expect(ll.size).toBe(2);
    });
  }); 

  describe("#push", () => {
    test("adds a new element at the end of list", () => {
      let ll = new LinkedList();
      ll.push("Roger"); // Roger -> NULL
      ll.push("Ade"); // Roger -> Ade -> NULL

      // start at first node
      let current = ll.head;
      expect(current.data).toEqual("Roger");
      // move to the second node
      current = current.next;
      expect(current.data).toEqual("Ade");
      expect(ll.size).toBe(2);
    });
  }); 
}); 