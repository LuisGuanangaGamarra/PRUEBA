const fecthdata = require('../Utils/fecthData');
const API = 'https://rickandmortyapi.com/api/character/';


const anotherFunction = async(url_api) => {
    try {
        const data = await fecthdata(url_api);
        const personaje = await fecthdata(`${API}${data.results[0].id}`);
        const origin = await fecthdata(personaje.origin.url);
        console.log(data.info.count);
        console.log(personaje.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
};

console.log('Before');
anotherFunction(API);
console.log('after');