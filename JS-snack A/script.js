let giocatore = {
    'codice': "",
    nome: "",
    cognome: "",
    età: "",
    'media punti': "",
    'percentuale di successo per tiri da 3 punti': "",
};

giocatore['codice'] = generatePlayerCode();
giocatore['media punti'] = Math.floor(Math.random() * ((50 + 1) - 0) + 0);
giocatore['percentuale di successo per tiri da 3 punti'] = Math.floor(Math.random() * ((100 + 1) - 0) + 0);

function generatePlayerCode(){
    return makeid(3) + makeNumid(3);
};

console.log(generatePlayerCode());

function makeid(lenght){
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXY';
    let charactersLenght = characters.length;
    for (let i = 0; i < lenght; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLenght));
    }
    return result;
};

function makeNumid(lenght){
    let result = '';
    let characters = '1234567890';
    let charactersLenght = characters.length;
    for (let i = 0; i < lenght; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLenght));
    }
    return result;
};




