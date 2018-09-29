const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id).then(user =>{
        done(null, user);
    })
});

passport.use(new GoogleStrategy({
    clientID : keys.googelClientID,
    clientSecret : keys.googelClientSecret,
    callbackURL : '/auth/google/callback'

}, (accessToken, refreshToken, profile, done)=>{
    User.findOne({googleId : profile.id})
     .then((existUser)=>{
         if(existUser){
            done(null , existUser);
         }else{
            new User({ googleId : profile.id}).save()
             .then(done(null , existUser));
         }
     })   
}));
