const people = [
    {
        name: 'Giulia',
        surname: 'Rossi',
        age: 27
    },
    {
        name: 'Marco',
        surname: 'Russo',
        age: 17
    },
    {
        name: 'Paolo',
        surname: 'Ferrari',
        age: 19
    }
];

const canDrive = people.filter((element) => {
    if(element.age >= 18) {
        console.log(`${element.name} ${element.surname} ha ${element.age} anni -> può guidare`);
    }else {
        console.log(`${element.name} ${element.surname} ha ${element.age} anni -> non può guidare`);
    }
});