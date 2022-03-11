const array = ['OCCHI', 'macchina', 'GAtto'];

const newArray = array.map((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
});

console.log(array);
console.log(newArray);