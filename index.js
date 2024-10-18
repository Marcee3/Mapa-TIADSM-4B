const express = require('express'); //importa el módulo express (framework de node.js) para la creación de api y app web
const path = require('path');
const app = express(); //crea una aplicación express

app.use(express.static(path.join(__dirname,'public')));// permite que el servidor sirva archivos estáticos desde la carpeta public
app.get('/',(req,res) => 
{
    res.sendFile(path.join(__dirname,'public/index.html'));  //envía el archivo index.html
});
const PORT = process.env.PORT || 3000; //define el puerto de la aplicación
app.listen
(PORT,()=>
    {
        console.log('El servidor esta ejecutandose en http://localhost:${PORT}');
    }
);