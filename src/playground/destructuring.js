// Object destructuring
const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temperature: 88
    }
};

const {name = 'Anonymous', age} = person;
//const name = person.name;
//const age = person.age;
console.log(`${name} is ${age}`);


const { temperature: temp, city} = person.location; //to rename it to temp
console.log(`Its ${temp} in ${city}`);

// default and renaming together
// name: firstName = 'Anonymous'


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
       // name: 'Penguin'
    }
}

const { name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);

// Array destructuring
// We can set defaults also.No renaming syntax as we can assign any name to the item at index

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, mycity, state] = address;

console.log(`You are in ${mycity}, ${state}`);


const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];

const [ menu_item, , medium_price] = item;

console.log(`A medium ${menu_item} costs ${medium_price}`);