const path = require("path")

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "C:\\My_Bot\\Capstone - Project\\capstone-project\\db.sqlite"
        },
        useNullAsDefault: true,
        migrations: {
            directory: path.join(__dirname, "backend/migrations")
        },
        seeds: {
            directory: path.join(__dirname, "backend/seeds")
        }
    },

    test: {
        client: "sqlite3",
        connection: ":memory:",
        useNullAsDefault: true,
        migrations: {
            directory: path.join(__dirname, "backend/migrations")
        },
        seeds: {
            directory: path.join(__dirname, "backend/test/seeds")
        }
    },
}