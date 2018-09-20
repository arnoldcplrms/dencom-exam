const express = require('express'),
    app = express(),
    router = express.Router(),
    bodyParser = require('body-parser'),
    CONFIG = require('./config');


app.use(bodyParser.json())
app.use(router);

require('./src/routes')(router);

app.listen(CONFIG.PORT, () => {
    console.log(`Listening to ${CONFIG.PORT}`);
})