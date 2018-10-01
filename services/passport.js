const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
});

passport.use(new GoogleStrategy({
            clientID: keys.googelClientID,
            clientSecret: keys.googelClientSecret,
            callbackURL: '/auth/google/callback'

        }, async (accessToken, refreshToken, profile, done) => {
            
            const existUser = await User.findOne({ googleId: profile.id});
            
            if (existUser) { return done(null, existUser); }
            
            const user = await User({ googleId: profile.id}).save()
            done(null, user)
         }));
