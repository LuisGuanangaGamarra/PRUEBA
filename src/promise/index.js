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
    .catch(error => console.error(error));
/*asd 3*/
//asd 4