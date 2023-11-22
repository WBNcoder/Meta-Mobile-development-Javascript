//task 1
function logDairy(){
    var dairy = ['cheese', 'sour cream', 'milk', 
    'yogurt', 'ice cream', 'milkshake'];

// for(let i = 0; i<dairy.length; i++){
//     console.log(dairy[i]);
// }
//     for( prop in dairy){
//     console.log(prop);
// }
// console.log("Now for -of");
// for (prop of Object.keys(dairy)){
//     console.log(prop);
// }
for (item of dairy){
    console.log(item);
}
}

logDairy();
//task 2
function birdCan(){
    const animal = {canJump: true };
        
    const bird = Object.create(animal);
        bird.canFly = true;
        bird.hasFeathers = true;
    for(prop of Object.keys(bird)){
        console.log(prop+":"+bird[prop]);
    }
}
birdCan();

// task 3
function animalCan(){
    console.log("in TASK 3 ------------")
    const animal = {canJump: true };
        
    const bird = Object.create(animal);
        bird.canFly = true;
        bird.hasFeathers = true;
        for(prop in (animal)){
            console.log(prop+":"+animal[prop]);
        }
        for(prop in (bird)){
        console.log(prop+":"+bird[prop]);
    }
}
animalCan();
