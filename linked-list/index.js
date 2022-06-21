class SinglyLinkedListNode{
  constructor(data){
    this.data = data;
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(head = null){
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