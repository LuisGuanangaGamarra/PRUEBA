const someThingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey');
        } else {
            reject('Error');
        }
    });
};

const someThingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('OK');
            }, 2000);

        } else {
            /*
                Con el new Error al falla la promesa se muestra
                el trace del codigo y la parte donde fallo
            */
            const error = new Error('Error Whoops');
            reject(error);
        }
    });
};

someThingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));
someThingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error));

/*
    Encadenamiento de promesas
*/
Promise.all([someThingWillHappen(), someThingWillHappen2()])
    .then(response => {
        console.log(response);
    })
    .catch(erro => console.error(erro));