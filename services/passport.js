const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID : keys.googelClientID,
    clientSecret : keys.googelClientSecret,
    callbackURL : '/auth/google/callback'
}, (accessToken, refreshToken, profile, done)=>{
    console.log('accese token :' ,accessToken);
    console.log('Refresh token :' ,refreshToken);
    console.log('profile token :' ,profile);
    console.log('done token :' ,done);
}));
