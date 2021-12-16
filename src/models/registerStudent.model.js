const bcrypt = require("bcryptjs");

const {Schema , model} = require('mongoose');

const registerStudentSchema =  new Schema({
    first_Name : { type : String , required:true},
    last_name : { type : String , required:true},
    email : { type : String , required:true , unique: true},
    password : { type : String , required:true},
    mobile : { type : Number , required:true},
    city : { type : String , required:false},
    preference : { type : String , required:true},
    howfind : { type : String , required:true},
    lookingFor : { type : String , required:true},
    affilate : { type : String , required:false},
},{
    versionKey:false,
    timestamps:true,
});



registerStudentSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    bcrypt.hash(this.password, 10, (err, hash) => {
      this.password = hash;
      return next();
    });
  });
  
  registerStudentSchema.methods.checkPassword = function (password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, function (err, same) {
        if (err) return reject(err);
  
        return resolve(same);
      });
    });
  };
  

module.exports = model('registerStudent' , registerStudentSchema)