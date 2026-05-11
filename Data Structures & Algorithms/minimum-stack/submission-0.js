class MinStack {
    constructor() {
        this.array = []
        this.minStack = []
    }

    push(val) {
        this.array.push(val)
        if (this.minStack.length === 0) {
            this.minStack.push(val)
        } else {
            const currentMin = this.minStack.at(-1)
            this.minStack.push(Math.min(val, currentMin))
        }
    }

    pop() {
        this.array.pop()
        this.minStack.pop()
    }

    top() {
        return this.array.at(-1)
    }

    getMin() {
        return this.minStack.at(-1)
    }
}