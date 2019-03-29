const bodyParser = require('body-parser'),
      express = require('express'),
      cors  = require('cors')
      app = express(),
      PORT = 8080,
      parking = require('./routes/parking');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', parking)

app.listen(PORT, ()=> {
    console.log(`server is listening on ${PORT}`)
})