class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Bruno', 27);
console.log(me.getGretting())

const other = new Person();
console.log(other.getGretting());