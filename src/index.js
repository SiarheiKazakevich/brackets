module.exports = function check(str, bracketsConfig) {
	// your solution

	const stack = [];
	const openBrackets = {};
	const closeBrackets = {};
	const sameBrackets = new Set();
	for (let [open, close] of bracketsConfig) {
		if (open === close) {
			sameBrackets.add(open);
		} else {
			openBrackets[open] = close;
			closeBrackets[close] = open;
		}
	}


	for (let char of str) {
		if (sameBrackets.has(char)) {
			if (stack[stack.length - 1] === char) {
				stack.pop();
			} else {
				stack.push(char);
			}
		} else if (openBrackets[char]) {
			stack.push(char);
		} else if (closeBrackets[char]) {
			if (stack.length === 0 || stack[stack.length - 1] !== closeBrackets[char]) {
				return false;
			}
			stack.pop();
		}
	}
	return stack.length === 0;
}


