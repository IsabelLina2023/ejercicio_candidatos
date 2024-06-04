import express from 'express';
import router from './routes/router.js';
import routerVotos from './routes/routerVotos.js';

const app = express(); //middleware
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api', router);
app.use('/voto', routerVotos);

app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));

app.get('/', (req, res) =>{
    res.send('Hola mundo, server on 🔥');
});
