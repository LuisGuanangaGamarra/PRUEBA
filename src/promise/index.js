const someThingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('OK');
        } else {
            reject('Error');
        }
    });
};

someThingWillHappen()
    .then(response => console.log(response))
<<<<<<< HEAD
    .catch(error => console.error(error));
/*asd 3*/
//asd 4
=======
    .catch(error => console.error(error));
>>>>>>> parent of d695186... ASD3
