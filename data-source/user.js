const {
    MongoDataSource
} = require('apollo-datasource-mongodb')

class Users extends MongoDataSource {
    findByEmail(email) {
        return this.model.findOne({
            email
        })
    }
    findByUsername(username) {
        return this.model.findOne({
            username
        })
    }
}
module.exports = Users