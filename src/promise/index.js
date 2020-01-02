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
=======
    .catch(error => console.error(error));
/*AAAA*/
>>>>>>> parent of 867e0ef... ASD 6
