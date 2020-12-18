const db = require('../../data/dbConfig')

module.exports = {
    async register(user) {
        try {
            const [id] = await db('users').insert(user, 'id')
            return db('users').where({id}).first()
        } catch (err){
            return `username taken`
        }
    },
    getUsers(){
        return db('users').select('id', 'username', 'password')
    },
    findBy(filter){
        return db('users').where(filter).first()
    },
    findById(id){
        return db('users').where({id}).first()
    }
}