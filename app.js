class Person{
	constructor(name, age, hair, beard){
		this.name = name;
		this.age = age;
		// this.hair = hair;
		// this.beard = beard;
	};

    saySomething(){
        console.log(`My name is ${this.name}, my age is ${this.age}`)
    };
};
module.exports = Person;
