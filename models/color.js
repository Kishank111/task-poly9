const mongoose = require('mongoose');

const colorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    colorCode: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;
