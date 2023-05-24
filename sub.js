var clients = require("./config/connection");

var subscriber = clients.clients();

subscriber.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'temp'
subscriber.subscribe('temp');
