var person = {
    gender   : 'male',
    eyeColor : ''
};
person['firstName'] = 'Cristian';
person.lastName = 'Botelho';
person.age = '22'

delete person.age

console.log(person)

function greetUser(person){
    console.log('Hello ' + person.firstName + ' ' + person['lastName']);
}

greetUser(person);