const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
     username: {
          type: String,
          required: [true, 'El nombre es necesario']
     },
     email: {
          type: String,
          unique: true,
          required: [true, 'El correo es necesario']
     },
     password: {
          type: String,
          required: [true, 'La contraseña es obligatoria']
     },
     avatar: {
          type: String,
          required: false
     },
     online: {
          type: Boolean,
          default: true
     }
});


userSchema.methods.toJSON = function () {

     let user = this;
     let userObject = user.toObject();
     delete userObject.password;

     return userObject;
};




module.exports = mongoose.model('User', userSchema);