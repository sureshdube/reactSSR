import 'babel-polyfill';
import express from 'express';
import {matchRoutes} from 'react-router-config';
import proxy from 'express-http-proxy';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express();
app.use('/api',proxy('https://react-ssr-api.herokuapp.com/',{
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host'] = 'http://localhost:3000';
        return opts;
    }
}));
app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);
    console.log("store",store);
    const loadDataPromises = matchRoutes(Routes,req.path).map(({route})=>{
        console.log("loadData",route.loadData);
        return route.loadData ? route.loadData(store): null;
    });
    Promise.all(loadDataPromises).then(()=>{
        const context = {};
        const content = renderer(req,store,context);
        if(context.notFound){
            res.status(404);
        }
        res.send(content);
    })
    console.log("loadDataPromises",loadDataPromises);
    //return res.send(renderer(req,store));
});
app.listen(3000, () => {
    console.log('Listening on port 3005');
});