'use strict';


//requiring the operating system module from node
const os = require('os');
const wifi = require('node-wifi');

/*
    WiFi Security:
        https://www.npmjs.com/package/node-wifi
*/


const iface = os.networkInterfaces().en0;

//initializes the wifi security 
wifi.init({
    iface
});


// we can put this into other modules
// let test = (name, str) => {
//     switch (true) {
//         case /WPA2/.test(str):
//             secured.push(name + ' security: ' + str);
//             console.log(secured);
//             break;
//         case /WPA/.test(str):
//             ehhSecured.push(name + ' security: ' + str);
//             console.log(ehhSecured);
//             break;
//         default:
//             notSecured.push(name + ' security: ' + str);
//             console.log(notSecured);
//     }
// }

exports.wifiScanner = (resolve) => {
    wifi.scan((err, networks) => {
        if (err) throw err;
        resolve(networks);
    })
}



// wifi.getCurrentConnections((err, currentConnections) => {
//     if (err) throw err;
//     console.log(currentConnections);
// });

/*
    WiFi Speed Test:
        https://www.npmjs.com/package/wifi-speed
*/

const getSpeed = require('wifi-speed');
getSpeed(function(err, speed) {
    if (err) throw err;
    console.log('Wi-Fi Speed : ', speed);
});

/*
    nMap finding security breaches:
        https://www.npmjs.com/package/node-nmap

        Requires to have nmap installed:
            https://nmap.org/download.html

    chai -- https://www.npmjs.com/package/chai

    future feature includes scanning the network for voluneriblities *** Ethical Hackers Welcomed ***
*/