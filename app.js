const express = require('express');
const morgan = require('morgan');


const app = express.Router();

//app.set(morgan('dev'));

app.get('/', (req, res)=>{
    res.send({'hi' :'there'});
})

const PORT =  process.env.port || 5555;
app.listen(PORT, (err)=>{
    if(err) return err;
    console.log('listning to '+ PORT);
});

