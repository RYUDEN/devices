// mongodb+srv://ryu:qaq1516qaq@cluster0-wviyl.mongodb.net/test?retryWrites=true&w=majority
const mongoose = require('mongoose')
const url = 'mongodb+srv://ryu:qaq1516qaq@cluster0-wviyl.mongodb.net/device?retryWrites=true&w=majority'
mongoose.set('useFindAndModify', false)

mongoose.connect(url, { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Connection success!')
  }
})

const Schema = mongoose.Schema

let phoneSchema = new Schema({
    host: String,
    userAgent: String,
    ua: String,
  })

  exports.Phone = mongoose.model('Phone', phoneSchema)