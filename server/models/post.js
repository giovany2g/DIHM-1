const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  elaboracion: {
    type: String,
    require: true,
  },
  inicio: {
    type: String,
    require: true,
  },
  fin: {
    type: String,
    require: true,
  },
  estudiante: {
    type: String,
    require: true,
  },
  institucion: {
    type: String,
    require: true,
  },
  horas: {
    type: String,
    require: true,
  },
  estado: {
    type: String,
    require: true,
  },
});

module.exports = {
  Post: mongoose.model("posts", PostSchema),
};
