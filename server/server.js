//import express & path
const path = require('path');
const express = require('express');
//create an instance
const app = express();
//need path
const publicPath = path.join(__dirname, '..', 'public');
//HEROKU
const port = provess.env.PORT || 3000;
//for middleware deals w/ requests and serves up public folder
app.use(express.static(publicPath));

// * to match all unmatched routes
app.get('*', (req, res) =>{
    res.sendFile(path.join(publicPath, 'index.html'));
});

//states port and caqllback function
app.listen(port, () => {console.log("server is up");});

