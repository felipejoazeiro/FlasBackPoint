const connection = require('../database/connection')

module.exports={
    async adiciona(req,res){
        const {data} = req.body
        await (connection('days').insert({
            data
        })
        (await connection('days')).includes({
            nome,
            pontuacao
        }))
    }
}