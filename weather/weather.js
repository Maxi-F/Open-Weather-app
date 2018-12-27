const axios = require('axios');

const getWeather = async(lat, lng) => {
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c762c115a7a7acab5f86ba1e381f9532`);

    return response.data.main.temp;
}

module.exports = {
    getWeather
}