import 'babel-polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';
const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();
    console.log("store",store);
    const loadDataPromises = matchRoutes(Routes,req.path).map(({route})=>{
        console.log("loadData",route.loadData);
        return route.loadData ? route.loadData(store): null;
    });
    Promise.all(loadDataPromises).then(()=>{
        res.send(renderer(req,store));
    })
    console.log("loadDataPromises",loadDataPromises);
    //return res.send(renderer(req,store));
});
app.listen(3005, () => {
    console.log('Listening on port 3005');
});