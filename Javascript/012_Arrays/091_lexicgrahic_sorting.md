Lexicographic sorting means sorting values like words: compare them as strings, character by character, rather than comparing their numeric value.

In JavaScript, Array.prototype.sort() uses lexicographic sorting by default. So in your example, [10, 1, 21, 2] is treated like ["10", "1", "21", "2"] and sorted as:
[1, 10, 2, 21]

This is why the numeric order may look unexpected. To sort numbers by their numeric value, provide a comparison function:
nums.sort((a, b) => a - b); // [1, 2, 10, 21]

For strings, lexicographic order is like dictionary order, though uppercase/lowercase and locale rules can affect the result.