class Pet {
    constructor(age = 1, food = 50, fitness = 50) {
        this.age = age;
        this.food = food;
        this.fitness = fitness;
        this.img = 'imgs/walk.gif';

        this.eating = false;
        this.exercising = false;
    }

    updateView(newImg) {
        if (newImg !== this.img) {
            // debugger
            this.img = newImg;
            $('#pet img').attr("src", newImg);
        }
        $('#food').text(this.food);
        $('#fitness').text(this.fitness);

    }

    checkStatus() {
        var newImg;
        if (this.food <= 30 || this.fitness <= 30) {
            newImg = 'imgs/cry.gif';
        } else {
            newImg = 'imgs/walk.gif';
        }
        this.updateView(newImg);
        console.log('draw', this.img);
    }

    grow(n) {
        if (this.food > 0) {
            this.food -= (2*n);
        }
        if (this.fitness >0) {
            this.fitness -= n;
        }
        this.checkStatus();
        console.log(this);
    }

    busy() {
        this.eating || this.exercising;
    }

    full() {
        this.food >= 100;
    }

    tired() {
        this.fitness >= 100;
    }

    eat() {
        if (this.busy() || this.full()) {
            return false;
        }
        this.food += 20;
        if (this.food > 100) {
            this.food = 100;
        }
        // this.checkStatus();
        this.updateView('imgs/eat.gif');
    }

    exercise() {
        if (this.busy() || this.tired()) {
            return false;
        }
        this.fitness += 20;
        if (this.fitness > 100) {
            this.fitness = 100;
        }
        // this.checkStatus();
        this.updateView('imgs/exercise.gif');
    }
}