
let magician : string[] = ["Harry", "David", "Criss"];

function copyArray(arr:string[]){
    return [...arr]
}

function make_great(magicianArray: string[]){
    for(let i=0; i<magicianArray.length; i++){
        magician[i] = "The Great " + magicianArray[i];
    }
}

function show_magicians(magician: string[]){
    magician.forEach(element => {
        console.log(element);
    });
    }

    const copyMagiciAnarray = copyArray(magician)


    make_great(copyMagiciAnarray);

    console.log('\n\nthis is my orignal array:');
    show_magicians(magician);

    console.log('\n\nthis is my modified copy of the  array:');
    show_magicians(copyMagiciAnarray);