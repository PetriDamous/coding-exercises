// What will be the result for these expressions?

5 > 4 // true
"apple" > "pineapple" // true
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

/*

Some of the reasons:

1. 5 > 4 → true
2. "apple" > "pineapple" → false
3. "2" > "12" → true
4. undefined == null → true
5. undefined === null → false
6. null == "\n0\n" → false
7. null === +"\n0\n" → false

1. Obviously, true.
2. Dictionary comparison, hence false.
3. Again, dictionary comparison, first char of "2" is greater than the first char of "1".
4. Values null and undefined equal each other only.
5. Strict equality is strict. Different types from both sides lead to false.
6. Similar to (4), null only equals undefined.
7. Strict equality of different types.

*/