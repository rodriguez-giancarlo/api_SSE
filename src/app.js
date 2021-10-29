const express=require('express');
const path=require('path');
const morgan= require('morgan');
const mysql=require('mysql');
const myConnection=require('express-myconnection');
const cors=require('cors')
const app=express();

// importar rutas
const personaRoutes=require('./routes/persona');
const loginRoutes=require('./routes/login');
const cursoRoutes=require('./routes/curso');
const temaRoutes=require('./routes/tema');
const matriculaRoutes=require('./routes/matricula');
const unidadRoutes=require('./routes/unidad');
const recursoRoutes=require('./routes/recurso');

// configuraciones
app.set('port',process.env.PORT || 4000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    port:3306,
    user:'root',
    passwod:"",
    database:'db_school'
},'single'));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
//ruta base
app.get('/',(req,res)=>{
    res.send('Bienvenido a mi API');
})
//routes
app.use('/persona',personaRoutes);
app.use('/curso',cursoRoutes);
app.use('/tema',temaRoutes);
app.use('/matricula',matriculaRoutes);
app.use('/login', loginRoutes);
app.use('/unidad',unidadRoutes);
app.use('/recurso',recursoRoutes);

//arcivos stativos
app.use(express.static(path.join(__dirname,'public')));

//server run
app.listen(app.get('port'),()=>{
    console.log("server runing on port",app.get('port'));
})