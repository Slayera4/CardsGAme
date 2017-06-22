import shuffle from 'lodash.shuffle';



const bull = ['../images/bull.jpg']

const NUMERO_DE_CARTAS = 1;


export default () => {
    const AnimalsArray = [bull];
    let cartas = [];


    while(cartas.length < NUMERO_DE_CARTAS) {
        const index = Math.floor(Math.random() * AnimalsArray.length);
        const carta = {
            icono: AnimalsArray.splice(index, 1)[0],
            fueAdivinada: false
        };

        cartas.push(carta);
        cartas.push({...carta});
    }

    return shuffle(cartas);
};