//npm init -y para iniciar un proyecto con todo por defecto

//sendFile necesita rutas absolutas, por eso necesito usar path

//path.join funciona tanto así './' como así '/'. En cambio, path.resolve funciona sólo así './'

const express = require('express')

const app = express()

const path = require('path')

app.listen(process.env.PORT || 3000, () => console.log('Servidor corriendo en el puerto 3000'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html')))

app.get('/register', (req, res) => res.sendFile(path.join(__dirname, '/views/register.html')))

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '/views/login.html')))

app.use(express.static(path.join(__dirname, '/public')))