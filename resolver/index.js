const resolvers = { //所有的Query 都走这里
    Query: {
        foo() {
            return 'hello'
        }
    },
    Mutation: {
        createUser(parent, {
            user
        }, {dataSource}) {
            console.log(args)
            return {
                user: {
                    email: 'a ',
                    username: 'b',
                    bio: 'c',
                    image: 'd ',
                    token: 'e'
                }
            }
        }
    }

}
module.exports = resolvers