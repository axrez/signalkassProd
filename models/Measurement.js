const mongoose = require('mongoose');

const { Schema } = mongoose;

const MeasureSchema = new Schema({
  data: {
    type: Array,
  },
  created: {
    type: Number,
  },
  index: {
    type: Number,
  },
});

module.exports = Measure = mongoose.model('measure', MeasureSchema);
