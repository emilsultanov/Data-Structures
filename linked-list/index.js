/**
 *
 * Singly-Linked-List
 *
 */
class SinglyLinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(head = null) {
		this.head = head;
	}

	size() {
		let size = 0;
		let node = this.head;

		while (node) {
			size++;
			node = node.next;
		}
		return size;
	}
}

let singlyLinkedListNode1 = new SinglyLinkedListNode(3);
let singlyLinkedListNode2 = new SinglyLinkedListNode(6);

singlyLinkedListNode1.next = singlyLinkedListNode2;

let SinglyLinkedList1 = new SinglyLinkedList(singlyLinkedListNode1);

/**
 *
 * Circular-Linked-List
 *
 */
class CircularLinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class CircularLinkedList {
	constructor(head = null) {
		this.head = head;
	}
}

let circularLinkedListNode1 = new CircularLinkedListNode(1);
let circularLinkedListNode2 = new CircularLinkedListNode(8);
let circularLinkedListNode3 = new CircularLinkedListNode(2);
let circularLinkedListNode4 = new CircularLinkedListNode(6);

circularLinkedListNode1.next = circularLinkedListNode2;
circularLinkedListNode2.next = circularLinkedListNode3;
circularLinkedListNode3.next = circularLinkedListNode4;
circularLinkedListNode4.next = circularLinkedListNode1;

let circularLinkedList1 = new CircularLinkedList(circularLinkedListNode1);

/**
 *
 * Doubly-Linked-List
 *
 */
class DoublyLinkedListNode {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor(head = null) {
		this.head = head;
	}
}

let doublyLinkedListNode1 = new DoublyLinkedListNode(3);
let doublyLinkedListNode2 = new DoublyLinkedListNode(5);
let doublyLinkedListNode3 = new DoublyLinkedListNode(7);
let doublyLinkedListNode4 = new DoublyLinkedListNode(9);

doublyLinkedListNode1.next = doublyLinkedListNode2;

doublyLinkedListNode2.prev = doublyLinkedListNode1;
doublyLinkedListNode2.next = doublyLinkedListNode3;

doublyLinkedListNode3.prev = doublyLinkedListNode2;
doublyLinkedListNode3.next = doublyLinkedListNode4;

doublyLinkedListNode4.prev = doublyLinkedListNode3;

let doublyLinkedList1 = new DoublyLinkedList(doublyLinkedListNode1);
