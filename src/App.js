import express  from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import indexRoutes from '../src/routes/index.js';
 
//Inicializacion de Express
const app=express();
const port=3333;
app.use(express.json());
const  __dirname=dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
 
app.set('view engine','ejs');
app.set('views', join(__dirname,'views'));
 
app.use(indexRoutes);
app.use(express.static(join(__dirname,'public')));
 
app.listen(process.env.PORT || port, () => {
  console.log("A la escucha en el puerto ", port);});