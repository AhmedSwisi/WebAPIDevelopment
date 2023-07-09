const axios = require('axios');

const get_weather = (city) => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.api-ninjas.com/v1/weather?city=' + city, {
            headers: {
                'X-Api-Key': 'WfHBKUXiKUJdCGH4nlfw9w==dMUXetT9waiMK6uy'
            }
        })
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

module.exports = get_weather;