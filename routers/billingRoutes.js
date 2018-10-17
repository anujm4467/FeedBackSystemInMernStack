const keys = require('../config/keys');
const stript = require('stripe')(keys.stripeSecretKey);
const logincheck = require('../middlewares/loginCheck');

module.exports = app =>{
    app.post('/api/stripe', logincheck, async (req, res) => {

      const charge = await stript.charges.create({
         amount : 500,
         currency : 'usd',
         description : '$5 for 5 credits',
         source : req.body.id,
       })
       
       req.user.credits += 5;
       const user = await req.user.save();
       res.send(user)
    });
}