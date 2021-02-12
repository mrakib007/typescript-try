"use strict";
// let myMoney = 50;
// myMoney = 10;
// myMoney = 0;
let age = 50;
let club = 'Real Madrid';
console.log(club);
const isFamous = true; //value has to be assigned here.
let famous; //but can assign value anywhere in the code.
famous = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
add(10, 20);
add('rakib', 'hasan');
add(3, 'someone');
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName('Martin', 'Rock');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const result = doubleItAndConsole(10);
console.log(result);
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(25, 26));
const numbers = [2, 4, 8, 6, 7, 4, 67, 8, 9, 8];
numbers.push(22);
const friends = ['George', 'Jeff', 'Adam', 'Abdul'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element.length > megaName.length) {
        megaName = element;
    }
}
console.log(megaName);
let player = {
    club: 'Real Madrid',
    salary: 45454545,
};
// object
const friend = {
    name: 'Samuel David',
    age: 51
};
friend.age = 57;
const messi = {
    name: 'Messi',
    club: 'Real Madrid',
    salary: 4500000,
    wife: 'Some name',
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'Liverpool',
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
const poorPlayer = { aeg: 20, salary: 10000 };
//getBonus(poorPlayer);
getBonus(ronaldo, ['messi']);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + this._partner;
    }
}
const sam = new Person('Samuel', 'David');
console.log(sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Ven';
// sam.fatherName='carton'; this is not possible for readonly
