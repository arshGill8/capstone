const geolib = require('geolib');

const parkingData = require('../parkingData'),
      express = require('express'),
      router = express.Router();

  
    router.post('/location', (req, res) => {
        let {lat, lng} = req.body
        let parkarray = parkingData.map(parkinglot => {
            const dist = geolib.getDistance(
                {
                    latitude: lat,
                    longitude: lng
                },
                {
                    latitude: parkinglot.lat,
                    longitude: parkinglot.lng
                },
                [
                    '100',
                    '1'
                ]
            )
            parkinglot.dist = dist;
            return parkinglot;
        }).sort((a, b) => {
            return a.dist-b.dist})

            res.json(parkarray)
    });


    module.exports = router;