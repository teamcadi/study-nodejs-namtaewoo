const express = require('express');
const app = express(); // Express -> Backend Application
const morgan = require('morgan');

//express static
app.use('/uploads', express.static('uploads'));

//application middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('common'));

// Load routers 
app.use('/users', require('./routers/user.router'));
app.use('/images', require('./routers/image.router'));
app.use('/admin', require('./routers/admin.router'));

//port binding
app.listen(9000, ()=>{
    console.log('server start');
})