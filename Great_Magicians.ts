
let magician : string[] = ["Harry", "David", "Criss"];

function make_great(magician: string[]){
    for(let i=0; i<magician.length; i++){
        magician[i] = "The Great " + magician[i];
    }
}

function show_magicians(magician: string[]){
    magician.forEach(element => {
        console.log(element);
    });
    }
make_great(magician);
    show_magicians(magician);
