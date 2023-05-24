var mqtt = require('mqtt');

var options = {
    host: 'host url here',
    port: 8883,
    protocol: 'mqtts',
    username: 'username here',
    password: 'user password here'
}




exports.clients = ()=>{
    // initialize the MQTT client
    var client = mqtt.connect(options);

    // setup the callbacks
    client.on('connect', function () {
        console.log('Connected');
    });

    client.on('error', function (error) {
        console.log(error);
    });

    return client;
}