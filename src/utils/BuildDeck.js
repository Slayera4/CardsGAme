import shuffle from 'lodash.shuffle';



const bull = ['http://i65.tinypic.com/wqrp6t.jpg']
const crab = ['http://i67.tinypic.com/2eeea2g.jpg']
const kangaroo = ['http://i67.tinypic.com/mlkwtu.jpg']
const monkey = ['http://i67.tinypic.com/21yk9g.jpg']
const rhino = ['http://i66.tinypic.com/mvnsb7.jpg']
const squirrel = ['http://i64.tinypic.com/dzavxd.jpg']
const turkey = ['http://i63.tinypic.com/1sxxd0.jpg']

const Number_of_Cards = 12;


export default () => {
    const AnimalsArray = [bull, crab, kangaroo, monkey, rhino, squirrel, turkey];
    let cards = [];


    while (cards.length < Number_of_Cards) {
        const index = Math.floor(Math.random() * AnimalsArray.length);
        const card = {
            icon: AnimalsArray.splice(index, 1)[0],
            wasGuessed: false
        };

        cards.push(card);
        cards.push({ ...card });
    }

    return shuffle(cards);
};