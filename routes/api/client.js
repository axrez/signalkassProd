const express = require('express');

const router = express.Router();

const Measure = require('../../models/Measurement');
const MeasureMap = require('../../models/MeasurementMap');

router.get('/', (req, res) => {
  Measure.find()
    .sort({ _id: -1 })
    .limit(1)
    .then(m => res.json(m))
    .catch(err => console.log(err));
});

router.get('/map', (req, res) => {
  MeasureMap.find()
    .limit(10)
    .sort({ $natural: -1 })
    .then(m => res.json(m))
    .catch(err => console.log(err));
});

router.post('/specefic', (req, res) => {
  Measure.find({ created: req.body.created })
    .then(d => res.json(d))
    .catch(err => console.log(err));
});

module.exports = router;
