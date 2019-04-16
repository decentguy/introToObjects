let Person  = require( './app.js');

let person_1 = new Person("Junior", 48);
let person_2 = new Person("Sweetbeard", 93);
let person_3  =  new Person("Mudi", 58);

let people = [person_1, person_2, person_3];
let i = 0;
// let j = 0;
while( i < 2){
	// while(j < people.length)
	// 	people[j].saySomething();
	// 	j++
    for(j= 0; j < people.length; j++)
        people[j].saySomething();
	i++
};
