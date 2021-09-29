const {
    makeExcuteableSchema
} = require('apollo-server-express')
const typeDefs=require('./type-def/index')
const resolvers=require('./resolver/index')

const schema= makeExcuteableSchema({
    typeDefs,resolvers
})