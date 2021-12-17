const mongoose = require('mongoose');

module.exports = () =>{
   return mongoose.connect('mongodb+srv://surajuser:suraj1234@cluster0.nzh42.mongodb.net/test?authSource=admin&replicaSet=atlas-teya03-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');
}