//Linked List
//2.1 Remove Dups
//pg 94

//Write code to remove duplicates from an unsorted linked list.

//Node Constructor 
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

//Linked List Constructor 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Adds an item to the end of a linked list
    add(element) {
        // creates a new node 
        let node = new Node(element);
        // to store current node 
        let current;
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            // iterate to the end of the 
            // list 
            while (current.next) {
                current = current.next;
            }
            // add node 
            current.next = node;
        }
        this.size++;
    }


    //Removes an item from a linked list
    removeElement(element) {
        let current = this.head;
        let prev = null;
        // iterate over the list 
        while (current != null) {
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    removeDuplicates() {
        let dupArray = []
        let current = this.head;
        while (current != null) {
            // comparing element with current 
            // element if found then remove the
            // the duplicate
            if (dupArray.includes(current.element)) {
                this.removeElement(current.element)
            }
            //add the item to the dupArray
            else {
                dupArray.push(current.element)
            }
            //set current to the next item in the list
            current = current.next
        }
    }

    // prints the list items 
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
    //Prints the size of the linked list
    size_of_list() {
        console.log(this.size);
    }
}

//Tests
let dupList = new LinkedList();
dupList.add("a")
dupList.add("b")
dupList.add("b")
dupList.add("c")
dupList.add("d")
dupList.add("d")
dupList.add("a")
dupList.add("c")
dupList.size_of_list() //Output: 8
dupList.printList() //Output: a b b c d d a c
dupList.removeDuplicates()
dupList.size_of_list() //Output: 4
dupList.printList() //Output: b d a c