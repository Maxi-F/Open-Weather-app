const address = {
    alias: 'd',
    desc: 'Address of the city to obtain the weather for',
    demand: true
};

const argv = require('yargs').options({
    address
}).argv;

module.exports = {
    argv
}