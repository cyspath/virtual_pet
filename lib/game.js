var pet = new Pet;
pet.checkStatus();

$('#eat').click(() => {
    console.log('eating...');
    pet.eat();
})

$('#exercise').click(() => {
    console.log('exercising...');
    pet.exercise();
})


setInterval(() => {
    pet.checkStatus();
    pet.grow(5);
}, 1500)