const dbModel = require('../model')
const Users = require( './user ' )
const Articles = require( './article ')
module.exports = ()=>{
return {
users: new Users( dbModel.user),
articles: new Articles( dbModel.Article)
}
}
