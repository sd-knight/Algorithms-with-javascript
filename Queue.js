class Queue {

	constructor() {
		this.N = 0;
		this.first = null;
		this.last = null;
	}

	size() {
		return this.N;
	}

	isEmpty() {
		return this.N == 0;
	}

	enqueue(item) {
		let oldlast = this.last;
		let Node = {
			item: item,
			next: null
		};
		this.last = Node;
		if (this.isEmpty())
			this.first = this.last;
		else
			oldlast.next = Node;
		this.N++;
	}

	dequeue() {
		let item = this.first.item;
		this.first = this.first.next;
		this.N--;
		if (this.isEmpty()) 
			this.last = this.first;
		return item;
	}

	[Symbol.iterator]() {
		let current = this.first;
		return {
			next() {
				let item, done = false;
				if (current == null) {
					done = true;
				} else {
					item = current.item;
					current = current.next;
				}
				return {
					value: item,
					done: done
				}
			}
		}
	}

}