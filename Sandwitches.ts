
function makeSandwich (item: string[]){
    console.log('\nmaking your sandwich with:');

    item.forEach(Element => console.log("- " + Element));

    console.log('\nyour sandwich is ready!');
}

makeSandwich(['ham', 'cheese', 'lettuce', 'tomato']);

makeSandwich(['ham', 'cheese']);
makeSandwich(['ham', 'cheese', 'bacon']);