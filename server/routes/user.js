const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Auth = require('../middlewares/auth');

const app = express();

app.post('/signup', (req, res) => {
     console.log('New signup request, creating user..........');
     let body = req.body;

     // password between 7 to 16 characters which contain only characters, numeric digits, 
     // underscore and first character must be a letter
     const check = /^[A-Za-z]\w{6,24}$/;
     if (body.password !== '' || body.password.match(check)) {
          let newUser = new User({
               username: body.username,
               email: body.email,
               password: bcrypt.hashSync(body.password, 10)
          });

          newUser.save((err, userDB) => {

               if (err) {
                    return res.status(400).json({
                         ok: false,
                         err
                    });
               }

               let token = jwt.sign({
                    user: userDB
               }, process.env.SEED, { expiresIn: process.env.CAD_TOKEN });

               res.json({
                    ok: true,
                    usuario: userDB,
                    token: token
               });


          });
     } else {
          res.json({
               ok: false,
               err: 'Wrong password!'
          });
     }
});

app.post('/login', (req, res) => {
     let body = req.body;

     User.findOne({ email: body.email }, (err, userDb) => {
          if (err) {
               return res.status(500).json({
                    ok: false,
                    err
               });
          }

          if (!userDb) {
               return res.status(400).json({
                    ok: false,
                    err: {
                         message: '(Usuario) o contraseña incorrectos'
                    }
               });
          }

          if (!bcrypt.compareSync(body.password, userDb.password)) {
               return res.status(400).json({
                    ok: false,
                    err: {
                         message: 'Usuario o (contraseña) incorrectos'
                    }
               });
          }

          let token = jwt.sign({
               user: userDb
          }, process.env.SEED, { expiresIn: process.env.CAD_TOKEN });

          res.json({
               ok: true,
               user: userDb,
               token: token
          });
     });

});

module.exports = app;