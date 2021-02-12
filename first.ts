// let myMoney = 50;
// myMoney = 10;
// myMoney = 0;

let age:number = 50;
let club:string = 'Real Madrid';
console.log(club); 
const isFamous: boolean = true; //value has to be assigned here.
let famous:boolean; //but can assign value anywhere in the code.
famous = true;

function add(num1:number|string,num2:number|string){
    return num1+num2;
}
add(5,10);
add(10,20);
add('rakib','hasan');
add(3,'someone');



function fullName(firstName:string,lastName:string):string{
    return firstName+" "+lastName;
}
const user = fullName('Martin','Rock');

function doubleItAndConsole(num:number):void{
    const result = num*2;
    console.log(result);
}
const result = doubleItAndConsole(10);
console.log(result);


let multiply2:(x:number,y:number)=>number;


multiply2 = (x,y)=>x*y;

const multiply = (x:number,y:number):number=>x*y;
console.log(multiply(25,26));



const numbers:number[] = [2,4,8,6,7,4,67,8,9,8];
numbers.push(22);

const friends:string[]=['George','Jeff','Adam','Abdul'];
let megaName:string = '';
for(let i=0;i<friends.length;i++){
    const element:string = friends[i];
    if(element.length>megaName.length){megaName=element;}
}
console.log(megaName);

let player:{
    club: string,
    salary: number
} = {
    club:'Real Madrid',
    salary:45454545,
}

// object
const friend:{name:string,age:number} = {
    name:'Samuel David',
    age:51
}
friend.age = 57;


interface Player{
    club:string,
    name:string,
    salary:number,
    wife?:string,
    isPlaying:boolean
}
const messi :Player= {
    name:'Messi',
    club:'Real Madrid',
    salary:4500000,
    wife:'Some name',
    isPlaying:true
}
const ronaldo:Player={
    name:'Ronaldo',
    club:'Liverpool',
}

function getBonus(player:Player,friends:string[]){
    return player.salary*0.1;
}
const poorPlayer = {aeg:20,salary:10000};
//getBonus(poorPlayer);
getBonus(ronaldo,['messi']);


class Person {
    name:string;
    readonly fatherName:string;
    private _partner:string;
    constructor(name:string,father:string){
        this.name= name;
        this._partner=name;
        this.fatherName=father;
    }
    getName():string{
        return this.name + this._partner;
    }
}
const sam = new Person('Samuel','David');
console.log(sam.name,sam.fatherName);
const samName:string = sam.getName();
sam.name='Ven';
// sam.fatherName='carton'; this is not possible for readonly
