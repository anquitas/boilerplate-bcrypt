'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt = require('bcrypt');
const requestLog = require('./middlewares/requestLog.js');
const res = require('express/lib/response.js');
const app         = express();
app.use(requestLog)
fccTesting(app);



const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


// API ENDPOINTS
app.get('/', (req, res)=> res.send('WELCOME LEARNER !!!'))



//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    if (err) {
        console.log('+ [ERROR] ', err)
        return
    }
    else {
        console.log('+ [LOG 1] ', hash )
    }
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if (err) {console.log('+ [ERROR] ', err)}
    else {
        console.log('+ [LOG 2] ', res )
    }
})
})



//END_ASYNC

//START_SYNC

var salt = bcrypt.genSaltSync(saltRounds)
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
if (hash) console.log('+ [LOG] ', hash)
    else console.log('+ [ERROR] ', 'no hash produced')
var result = bcrypt.compareSync(myPlaintextPassword, hash)
if (result) console.log('[LOG] ', 'result: ', result)
    else console.log('+ [ERROR] ', 'no hash produced')


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
