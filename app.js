const argv = require('./config/yargs').argv;
const place = require('./place/place');
const weather = require('./weather/weather');

let getInfo = async(address) => {

    try {
        let searchedPlace = await place.getPlaceLatLng(address);
        let searchedWeather = await weather.getWeather(searchedPlace.lat, searchedPlace.lng);

        return `The temperature in ${searchedPlace.address} is ${searchedWeather}`;
    } catch (error) {
        return `We could not determine the temperature in ${address}`;
    }
}

getInfo(argv.address)
    .then(response => console.log(response))
    .catch(err => console.log(err));