import Express from 'express';
import path from 'path'

const app = Express();

app.use('/css', Express.static(path.resolve('public/css')));
app.use('/img', Express.static(path.resolve('public/img')));
app.use('/js', Express.static(path.resolve('public/js')));
app.use('/fonts', Express.static(path.resolve('public/fonts')));


app.get('/', (req, res)=>{
    res.sendFile(path.resolve('index.html'));    
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log('Funcionando!');
});
