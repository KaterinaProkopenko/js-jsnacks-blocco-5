const animali = [
{   
    nome: 'leone', 
    famiglia: 'felidi', 
    classe: 'mammiferi' 
},
{
    nome: 'cane', 
    famiglia: 'canidi', 
    classe: 'mammiferi' 
},
{   
    nome: 'gallina', 
    famiglia: 'fasianidi', 
    classe: 'uccelli' 
}];

const mammiferi = animali.filter((element) => {
    return element.classe === 'mammiferi';
});
console.log(mammiferi);