# xserver
**xserver** it's a fast Node.js clean template. Skip the boring log and sign in process and start working on your idea. 

xserver uses **Express** & **Mongoose**.

## Install xserver

`npm install`

# Releases

https://github.com/jorginyu/xserver/releases

## Use

```npm start```

This will wake up the server and start listening requests.
**xserver** uses *nodemon*. While xserver is running, type `rs` to restart the service.

## Database Connection & Other 

**Edit** the **database connection** on the `server/config.js` file. You can also edit the **seed**, **port** and **token expiration**.

```
process.env.DB = process.env.DB || 'mongodb://localhost:27017/YOUR_DB_NAME';
process.env.SEED = process.env.SEED || 'your-seed-name';
process.env.PORT = process.env.PORT || 8080;
process.env.CAD_TOKEN = '48h';
```

## Requests

The `/signin` *POST* request, register a new user. In response, if all goes good... **xserver** sends the **user object** plus a **token**. 
The `/login` *POST* request, log a new user. In response, if all goes good... **xserver** sends the **user object** plus a **token**. 

## Authenticate the token

In order to accredit tokens and validate routes, export the `server/middlewares/auth.js` file and use it on your own routes, e.g:
```
app.get('/', auth, (req, res) => {

});
```
