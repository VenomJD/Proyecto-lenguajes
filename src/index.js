import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url'
import RutasJS from './routes/index.js'
//constantes
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))
const port = 5000;


//configuraciones de app

app.set('views', join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(RutasJS);
app.use(express.static(join(__dirname, 'public')))
app.listen(process.env.port || port);
console.log(process.env.port || port)