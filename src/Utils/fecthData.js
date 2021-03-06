let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = function(event) {
            if (xhttp.readyState === 4) {
                const error = new Error('Error' + url_api);
                xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)) : reject(error);
            }
        };
        xhttp.send();
    });
}
module.exports = fetchData;