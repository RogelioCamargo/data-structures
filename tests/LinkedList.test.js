const LinkedList = require("../LinkedList"); 

describe("LinkedList", () => {
  describe("#unshift", () => {
    test("adds a new element at the beginning of list", () => {
      let ll = new LinkedList();
      ll.unshift("Roger"); // Roger -> NULL
      ll.unshift("Ade"); // Ade -> Roger -> NULL

      expect(ll.at(0)).toEqual("Ade");
      expect(ll.at(1)).toEqual("Roger");
      expect(ll.size).toBe(2);

      ll.clear(); 
    });
  }); 

  describe("#push", () => {
    test("adds a new element at the end of list", () => {
      let ll = new LinkedList();
      ll.push("Roger"); // Roger -> NULL
      ll.push("Ade"); // Roger -> Ade -> NULL

      expect(ll.at(0)).toEqual("Roger");
      expect(ll.at(1)).toEqual("Ade");
      expect(ll.size).toBe(2);

      ll.clear(); 
    });
  }); 

  describe("#insert", () => {
    test("adds a new element at the specifed index", () => {
      let ll = new LinkedList();
      ll.insertAt("Roger", -1); // Roger -> NULL
      ll.insertAt("Ade", 3); // Roger -> Ade -> NULL
      ll.insertAt("Juan", 1); // Roger -> Juan -> Ade -> NULL; 

      expect(ll.at(0)).toEqual("Roger");
      expect(ll.at(1)).toEqual("Juan"); 
      expect(ll.at(2)).toEqual("Ade");
      expect(ll.size).toBe(3);

      ll.clear();
    });
  }); 

  describe("#shift", () => {
    test("removes element at the beginning of list", () => {
      let ll = new LinkedList();
      ll.unshift("Roger"); // Roger -> NULL
      ll.unshift("Ade"); // Ade -> Roger -> NULL
      ll.shift(); // Roger -> NULL

      expect(ll.at(0)).toEqual("Roger");
      expect(ll.size).toBe(1);

      ll.shift(); // NULL
      expect(ll.at(0)).toBeNull();
      expect(ll.size).toBe(0);
    });
  }); 

  describe("#pop", () => {
    test("removes element at the end of list", () => {
      let ll = new LinkedList();
      ll.push("Roger"); // Roger -> NULL
      ll.push("Ade"); // Roger -> Ade -> NULL
      ll.pop(); 

      expect(ll.at(0)).toEqual("Roger");
      expect(ll.size).toBe(1);
      
      ll.pop();
      expect(ll.at(0)).toBeNull();
      expect(ll.size).toBe(0);
    });
  }); 

  describe("#removeAt", () => {
    test("removes an element at the specifed index", () => {
      let ll = new LinkedList();
      ll.push("Roger"); // Roger -> NULL
      ll.push("Ade"); // Roger -> Ade -> NULL
      ll.push("Juan"); // Roger -> Ade -> Juan -> NULL;
      ll.push("Emma"); // Roger -> Ade -> Juan -> Emma -> NULL;

      expect(ll.at(1)).toEqual("Ade");
      ll.removeAt(1); // Roger -> Juan -> Emma -> NULL;
      expect(ll.at(1)).toEqual("Juan");

      expect(ll.at(0)).toEqual("Roger");
      ll.removeAt(0); // Juan -> Emma -> NULL;
      expect(ll.at(0)).toEqual("Juan");

      expect(ll.at(1)).toEqual("Emma");
      ll.removeAt(1); // Emma -> NULL;
      expect(ll.at(1)).toBeNull();
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

      ll.clear(); 
    });
  }); 
}); 