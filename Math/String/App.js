let str = "  Hello JavaScript World!  ";

let strLength = str.length;
console.log("1. Length:", strLength);

let upper = str.toUpperCase();
console.log("2. To Upper Case:", upper);

let lower = str.toLowerCase();
console.log("3. To Lower Case:", lower);

let hasJava = str.includes("Java");
console.log("4. Includes 'Java':", hasJava);

let worldIndex = str.indexOf("World");
console.log("5. Index Of 'World':", worldIndex);

let sliced = str.slice(2, 7);
console.log("6. Slice (2, 7):", sliced);

let replaced = str.replace("World", "Universe");
console.log("7. Replace 'World' with 'Universe':", replaced);

let trimmed = str.trim();
console.log("8. Trim:", `"${trimmed}"`);

let splitted = str.split(" ");
console.log("9. Split by space:", splitted);

let charAtTwo = str.charAt(2);
console.log("10. Char At index 2:", charAtTwo);