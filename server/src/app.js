const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = Express(); // Gets the express object
app.use(bodyParser.json()); // Allows for json data processing easily
app.use(morgan('combined')); // Used to log out data
app.use(cors()); // Allows any host or client to access this

// Creating a request at a /status endpoint
app.get('/status', (req, res) => {
    res.send({
        message: "This is a message"
    });
});

app.listen(process.env.PORT || 8081);