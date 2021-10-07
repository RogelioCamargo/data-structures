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

  describe("#shift", () => {
    test("removes element at the beginning of list", () => {
      let ll = new LinkedList();
      ll.unshift("Roger"); // Roger -> NULL
      ll.unshift("Ade"); // Ade -> Roger -> NULL
      ll.shift(); // Roger -> NULL

      expect(ll.head.data).toEqual("Roger");
      expect(ll.size).toBe(1);

      ll.shift(); // NULL
      expect(ll.head).toBeNull();
      expect(ll.size).toBe(0);
    });
  }); 

  describe("#pop", () => {
    test("removes element at the end of list", () => {
      let ll = new LinkedList();
      ll.push("Roger"); // Roger -> NULL
      ll.push("Ade"); // Roger -> Ade -> NULL
      ll.pop(); 

      expect(ll.head.data).toEqual("Roger");
      expect(ll.size).toBe(1);
      
      ll.pop();
      expect(ll.head).toBeNull();
      expect(ll.size).toBe(0);
    });
  }); 

  describe("#isEmpty", () => {
    test("checks if the list is empty", () => {
      let ll = new LinkedList();
      ll.push("Roger"); // Roger -> NULL

      expect(ll.isEmpty()).toBe(false);

      ll.pop();

      expect(ll.isEmpty()).toBe(true);
    });
  }); 

  describe("#indexOf", () => {
    test("checks if the list is empty", () => {
      let ll = new LinkedList();
      ll.push("Roger"); // Roger -> NULL
      ll.push("Ade"); // Roger -> Ade -> NULL
      ll.push("Juan"); // Roger -> Ade -> Juan -> NULL

      expect(ll.indexOf("Roger")).toBe(0);
      expect(ll.indexOf("Juan")).toBe(2); 
    });
  }); 
}); 