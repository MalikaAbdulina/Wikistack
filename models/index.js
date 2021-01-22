const Sequelize = require('sequelize');
const db = new Sequelize('postgres://malika:malika@localhost:5432/wikistack', {
    logging: false
});

const Page = db.define('page', {
    title: Sequelize.STRING,
    slug: Sequelize.STRING,
        // validate: {
        //     isUrl: true
        // },
    content: Sequelize.TEXT,
    status: Sequelize.BOOLEAN
});

const User = db.define('user', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    }
});


module.exports = {
  db, Page, User
}