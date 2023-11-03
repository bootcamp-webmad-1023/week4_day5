const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: [{
      type: Schema.Types.ObjectId,
      ref: 'Author'       // nombre del modelo relacionado
    }],
    rating: Number
  },
  {
    timestamps: true
  }
);

module.exports = model('Book', bookSchema)