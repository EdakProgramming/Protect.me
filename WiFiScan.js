'use strict';

//requiring the operating system module from node
const os = require('os');
const wifi = require('node-wifi');
const getSpeed = require('wifi-speed');
/*
    WiFi Security:
        https://www.npmjs.com/package/node-wifi
*/


const iface = os.networkInterfaces().en0;

//initializes the wifi security 
wifi.init({
    iface
});

/*
    Check networks around you, even hidden SSIDs.

    // separate the networks from secured, at risk, to vulnerable

*/
exports.wifiScanner = (resolve) => {
    wifi.scan((err, networks) => {
        if (err) throw err;
        resolve(networks);
    })
}

/*
    Check vulnerablity of current network.
*/

// wifi.getCurrentConnections((err, currentConnections) => {
//     if (err) throw err;
//     console.log(currentConnections);
// });

/*
    WiFi Speed Test:
        https://www.npmjs.com/package/wifi-speed
*/

exports.testSpeed = (test) => {
    getSpeed((err, speed) => {
        if (err) throw err;
        test(speed);
    })
}


/*
    nMap finding security breaches:
        https://www.npmjs.com/package/node-nmap

        Requires to have nmap installed:
            https://nmap.org/download.html

   

    future feature includes scanning the network for voluneriblities *** Ethical Hackers Welcomed ***
*/