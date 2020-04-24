var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = "" + firstName + middleInitial + lastName;
    }
    return Student;
}());
function helloWorld(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var student = new Student('xiaofeng', 'Mr.', 'dong');
console.log(student);
helloWorld(student);
var kim = {
    firstName: 'mike',
    gender: 'male',
    lastName: 'op',
};
var add = function (x, y) {
    return x + y;
};
console.log(add(1, 2));
