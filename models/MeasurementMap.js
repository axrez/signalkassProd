const mongoose = require('mongoose');

const { Schema } = mongoose;

const MeasureMapSchema = new Schema({
  created: {
    type: Number,
  },
  index: {
    type: Number,
  },
});

module.exports = MeasureMap = mongoose.model('measureMap', MeasureMapSchema);
