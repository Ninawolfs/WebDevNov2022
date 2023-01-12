const car = {
    color: 'black',
    model: 'bmw 2012',
    energy: 'benzine',
}

car.smart=false;
car.energy='diezel';
car.customers=['a','b','c','d']; //array

car.customers[0]='f';

car.showInfo = function(){
    console.log('hello world', this.background)
}

console.log(car);
console.table(car);
car.showInfo();







const me = {
    favoriteColor: 'Turqouize',
    favoriteFood: 'Pasta',
    favoriteBook: 'Name of the wind',
    age: 16,
    height: 150,
    weight: 40,
    instagram: 'nina_wolfs',
    facebook: 'wolfs_nina',
    lifeStyle: 'chiller crew',
   
}



me.facebook='wolfss_nina';
me.friends=['Yann', 'Zino','Alicia','Mig','Nico']
me.friends [2]= 'Peter'
me.family=['ingrid', 'Marc','Cedric','Titi','Leo']


console.log(me);
console.table(me);

const Me = {
    favoriteColor: 'Turqouize',
    favoriteFood: 'Pasta',
    favoriteBook: 'Name of the wind',
    age: 16,
    height: 150,
    weight: 40,
    instagram: 'nina_wolfs',
    facebook: 'wolfs_nina',
    lifeStyle: 'chiller crew',

    showMyinfo: function (){
        console.log(`${this.favoriteColor} is my favorite color!`)

    }
}
Me.showMyinfo()


