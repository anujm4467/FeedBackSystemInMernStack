const express = require('express');
const app = express();
require('./services/passport');

const morgan = require('morgan');
app.use(morgan('dev'));

require('./routers/authRoutes') (app);

const PORT =  process.env.PORT || 5555;
app.listen(PORT, (err)=>{
    if(err) return err;
    console.log('listning to '+ PORT);
});

