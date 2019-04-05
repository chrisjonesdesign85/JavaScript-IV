// CODE here for your Lambda Classes
//create initial class
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name} and I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(insAttrs) {
        super(insAttrs) //binds everything together
        this.specialty = insAttrs.specialty; // some unique properties to the Instructor class.
        this.favLanguage = insAttrs.favLanguage;
        this.catchPhrase = insAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student} receives a prefect score on ${subject}`)
    }
}

// Student Class
class Student extends Person {
    constructor(stuAttrs) {
        super(stuAttrs)
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
    }
    listSubjects() {
        console.log(`I like ${this.favSubjects}, says ${this.name}.`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Person {
    constructor(pmAttrs) {
        super(pmAttrs)
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`)
    }
}

//create a new object that is a PM
const alex = new ProjectManager({
    name: "Alex",
    age: "immortal",
    location: "west coast",
    gender: "Male",
    gradClassName: "Web1",
    favInstructor: "Cam"

})

//create a new Student object
const chris = new Student({
    name: "Chris",
    age: 33,
    location: "Planet Earth",
    gender: "Male",
    previousBackground: "Kitchen",
    className: "Webpt05",
    favSubjects: ["math", " Science and", " English"]
})


//Crete a new Instructor object
const cam = new Instructor({
    name: "Cam",
    age: 31,
    location: "Planet Earth",
    gender: "Male",
    specialty: "speed runs",
    favLanguage: "JavaScript",
    catchPhrase: "Cam's awesome Catchphrase!"
})


//initiate the methods.
cam.speak()
cam.demo('Math')
cam.grade("Chris", "JavaScript")
chris.listSubjects()
chris.PRAssignment("JS")
chris.sprintChallenge("JavaScript-IV")
console.log(chris.previousBackground)
alex.standUp("alex-webpt5")
alex.debugsCode("Chris", "React")
console.log("Lambda School Rocks!")