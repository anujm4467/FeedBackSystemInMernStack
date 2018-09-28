const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');      

module.exports = app =>{

    app.get('/auth/google', passport.authenticate('google' , {
        scope : ['profile' , 'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google'), (req,res)=>{
        res.send('test');
    });
};


