import express from 'express';
import renderer from './helpers/renderer';
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    return res.send(renderer());
});
app.listen(3005, () => {
    console.log('Listening on port 3005');
});