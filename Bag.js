class Bag {
	constructor() {
		this.N = 0;
		this.first = null;
	}

	size() {
		return this.N;
	}

	isEmpty() {
		return this.N === 0;
	}

	push(item) {
		let Node = {
			item: item,
			next: this.first
		};
		this.first = Node;
		this.N++;
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