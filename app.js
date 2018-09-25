const express = require('express');
const morgan = require('morgan');


const app = require('express');
app.set(morgan('dev'));

app.get('/', (req, res)=>{
    res.send('hi its me..');
})

const PORT =  process.env.port || 3333;
app.listen(PORT, (err)=>{
    if(err) return err;
    console.log('listning to '+ PORT);
});