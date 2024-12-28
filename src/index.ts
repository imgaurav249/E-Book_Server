import express from 'express';
const app = express();
const port = process.env.PORT || 8989;


app.get('/', (req, res) => {
    res.send('<h1>Hello World from Gaurav!<h1>');
});
app.get('/login', (req, res) => {
    res.send('<h2>you  can do the login here<h2>');
});
app.listen(port, () => {

    console.log(`listening on port  http://localhost:${port}`);
    


})