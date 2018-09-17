const express = require('express');
const app = express();
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/component/Home').default;
app.get('/',(req,res)=>{
const content = renderToString(<Home/>);
return res.send(content);
});
app.listen(3005,()=>{
console.log('Listening on port 3005');
});