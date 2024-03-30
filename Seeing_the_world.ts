// store the location in Array. Make sure the array is not in alphabatical order.
let places: string[] = [
  "Italy",
  "Germany",
  "Agra",
  "Eifel Tower",
  "Times Square",
];
// print your array in its orignal order.
console.log("Orignal " + places);

// print your array in alphabatical order witout modifying the actual List.
console.log("copy " + [...places].sort());

// show that your array is still in its orignal order by printing it.
console.log("Orignal " + places);

// print your array in reverse alphabatical order without changing the order of the orignal list.
console.log("copy " + [...places].sort().reverse());

// show that your array is still in it orignal order by printing it again
console.log("Orignal " + places);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("orignal " + places.reverse());

// Reverse the order of your list again. Print the list to show it's back to its orignal order.
console.log("orignal " + places.reverse());

// Sort your array so it's stored in alphabatical order. print the array to show that its order has been changed.

console.log("orignal " + places.sort());

// sort to change your array so its tored in reverse alphabatical order. print the list to show that its order has changd.

console.log("orignal " + places.sort().reverse());
