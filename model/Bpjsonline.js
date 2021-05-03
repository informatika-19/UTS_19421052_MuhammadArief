const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bpjsonlineSchema = new Schema({
  nomorkartu: {
    type: Number
  },
  nama: {
    type: String
  },
  alamat: {
    type: String
  },
  tanggallahir: {
    type: String
  },
  nik: {
    type: Number
  },
  kelas: {
    type: String
  }
  
})
module.exports = mongoose.model('bpjsonline', bpjsonlineSchema)