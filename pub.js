var clients = require("./config/connection");

var pub = clients.clients();

// publish message 'Hello' to topic 'temp'
pub.publish('temp', '25 Decrees Celcius');