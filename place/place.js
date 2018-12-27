const axios = require('axios')

const getPlaceLatLng = async(address) => {

    let encodedURL = encodeURI(address);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (response.data.status === "ZERO_RESULTS") throw new Error(`Error: There were no results for the address ${address}`);

    let location = response.data.results[0];
    let coords = location.geometry.location;

    return {
        address: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getPlaceLatLng
}