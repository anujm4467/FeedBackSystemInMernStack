const express = require('express');
const app = express();

require('./models/User');
require('./services/passport');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/emaily-dev',{ useNewUrlParser: true } , ()=>{
    console.log('connected with the database');
})

const morgan = require('morgan');
app.use(morgan('dev'));

const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

app.use(cookieSession({
    maxAge : 30 * 24 * 60 * 60 * 1000,
    keys : [keys.cookieKeys] 
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routers/authRoutes') (app);

const PORT =  process.env.PORT || 5555;
app.listen(PORT, (err)=>{
    if(err) return err;
    console.log('listning to '+ PORT);
});

