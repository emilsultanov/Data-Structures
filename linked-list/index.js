class LinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
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

let linkedListNode1 = new LinkedListNode(3);
let linkedListNode2 = new LinkedListNode(6);

linkedListNode1.next = linkedListNode2;

let linkedList1 = new LinkedList(linkedListNode1);
