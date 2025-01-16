import express from 'express'

const app = express()

const users = []

app.post('/usuarios', (req, res)=>{
    
})

app.get('/usuarios', (req, res) => {
    res.send("Enviado com sucesso.")
})

app.listen(3000)

