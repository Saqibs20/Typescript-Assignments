

console.log("Equality test with string: ","Apple" === "Apple" );

console.log("Equality test with string: ",("Apple" as string) != "Orange" );

console.log("Lower case function test: ", "HELLO".toLowerCase()=== "hello");

console.log("Equality test with Number: ",26 === 26);

console.log("InEquality test with Number: ",(26 as number) != 35);

console.log("Greater than test: ", 10 > 5);

console.log("Greater than test: ", 10 < 15);

console.log("Greater than and equal to test: ", 10 >= 10);

console.log("Less than or equal to test: ", 5 <= 10 );

console.log("And operator Test: ", 5===5 && 10 > 5);

console.log("Or operator Test: ", 5===5 || false);

const fruits :string[] = ['Nashpati', 'Banana', 'Apple'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));

console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));