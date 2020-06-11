const connection = require('../database/connection')
const crypto = require('crypto')

module.exports={
    async lista(req,res){
        const players = await connection('players').select('*')
        return res.json(players)
    },
    async adiciona(req,res){
        const id = crypto.randomBytes(1).toString('HEX')
        const {name,points} = req.body
    
        await connection('players').insert({
            id,
            name,
            points
        })
        return res.json({
            id,
            name,
            points
        })
    },
    async delete(req,res){
        const {id} = req.params;
        await connection('players').where('id',id).delete()
        return res.status(204).send()
    }
}