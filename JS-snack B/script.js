const automobili = [
    {
        marca: "",
        modello: "",
        alimentazione:"diesel"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"benzina"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"metano"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"elettrico"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"gpl"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"diesel"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"benzina"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"metano"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"elettrico"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"gpl"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"diesel"
    },
    {
        marca: "",
        modello: "",
        alimentazione:"benzina"
    }
];

const alimentazioneBenzina = automobili.filter((element) => {
    return element.alimentazione === "benzina";
});

console.table(alimentazioneBenzina);

const alimentazioneDiesel = automobili.filter((element) => {
    return element.alimentazione === "diesel";
});

console.table(alimentazioneDiesel);

const alimentazione = automobili.filter((element) => {
    return element.alimentazione !== "benzina" && element.alimentazione !== "diesel";
});

console.table(alimentazione);


