import {Router} from 'express'

import {diadasemana, fatorial, semafaro, sequencia} from './services.js'






const server = Router();


server.get('/semafaro/:cor',(req,resp)=>{
try{
        const cor= req.params.cor;

        const a =semafaro(cor);

        resp.send({
            cor: a
        })
}
catch(err){
    resp.status(404).send({
        Error:err.message
    })
}
}

) 


server.get('/diasemana', (req, resp)=>{
    try{
    const dia = Number(req.query.dia);

    const a = diadasemana(dia);

    resp.send({
        dia: a
    })
}
catch(err){
    resp.status(404).send({
        Error:err.message
    })
}

})


server.post('/fatorial', (req, resp)=>{
    try{

    
    const numero = Number(req.query.numero);

    const a= fatorial(numero);

    resp.send({
        numero: a
    })
}
catch(err){
    resp.status(404).send({
        Error:err.message
    })
}
})


server.post('/sequenciaPar', (req, resp)=>{
    try{
    const numero = req.body.numero

    const a= sequencia(numero);

    resp.send({
        numero:a
    })
}
catch(err){
    resp.status(404).send({
        Error:err.message
    })
}
})

export default server;