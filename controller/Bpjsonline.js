const bpjsonlineModel = require('../model/Bpjsonline')
const objectId = require('mongoose').Types.ObjectId

//meng create data baru (create)
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    bpjsonlineModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Calon Penerima BPJS'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Calon Penerima BPJS'
      }))
  })
//menampilkan data seluruh (read)
  exports.showAllData = () =>
    new Promise((resolve, reject) => {
        bpjsonlineModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data Calon Penerima BPJS',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data Calon Penerima BPJS',
            data: []
        }))
    })
// menampilkan data dengan object id (read)
exports.showDataById = (id) =>
    new Promise((resolve, reject) => {
        bpjsonlineModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Data Calon Penerima BPJS',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data Calon Penerima BPJS',
      data: null
  }))
})
// update data dengan object id (update)
exports.update = (id, data) => 
  new Promise ((resolve, reject) => {
    bpjsonlineModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Data Calon Penerima BPJS'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Data Calon Penerima BPJS'
    }))
})
//menghapus data dengan object id (delete)
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    bpjsonlineModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Data Calon Penerima BPJS'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Data Calon Penerima BPJS'
  }))
})
