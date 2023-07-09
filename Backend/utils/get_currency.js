const axios = require('axios');

const get_currency = (currency) => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=Aw5cZf5nHz2nlUtDyUBLFbIr17S4x0S08vepNWua&currencies=' + currency)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = get_currency;