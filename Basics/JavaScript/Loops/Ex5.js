// Calculate the speed of a car!

function speedCar(distance,time){
    return distance/time
}

let speedOfCar = speedCar(100,2)
console.log(`The car is driving at ${speedOfCar} km/h`);


// calculator: maak een function die + - / * kan maken

const calc = {
    sum : function (num1,num2){
        return num1+num2
    },
    subtract: function (num1,num2){
        return num1-num2
    },
    multiply : function (num1,num2){
        return num1*num2
    },
    devide : function (num1,num2){
        return num1/num2
    }
}


console.log(calc.devide(5,6))


// Use methods to direct your drone

const drone = {
    runEngine: () => console.log('Drone engine has been started!'),
    fly: direction => console.log(`Drone is flying ${direction}.`),
    flyTo: coordinate => console.log(`Drone is flying to ${coordinate}.`),
    takePhoto: () => console.log('Photo captured.'),
    returnBase: () => console.log('Drone is going back to base.')
}

function joyStick(keypress, location, direction){
    switch (keypress) {
        case 'run':
            drone.runEngine();
            break;
        case 'fly':
            drone.fly(direction);
            break;
        case 'flyTo':
            drone.flyTo(location);
            break;
        case 'takePhoto':
            drone.takePhoto();
            break;
        case 'return':
            drone.returnBase();
            break;
        default:
            console.log('Drone crashed')
    }
}

joyStick('run');
joyStick('fly', '', 'left');
joyStick('flyTo', 'Brussels');
joyStick('takePhoto');
joyStick('return');