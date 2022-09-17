import {Client} from 'pg'

exports.handler = async (event, context) => {
    const sqlUsername = process.env.SQL_USERNAME
    const sqlPassword = process.env.SQL_PASSWORD
    const sqlHost = process.env.SQL_HOST
    const sqlPort = process.env.SQL_PORT
    const sqlOptions = process.env.SQL_OPTIONS
    const sqlDatabase = process.env.SQL_DATABASE
    const sqlTable = process.env.SQL_TABLE
    const id = JSON.parse(event.body).id

    const pgClient = new Client(`postgresql://${sqlUsername}:${sqlPassword}@${sqlHost}:${sqlPort}/${sqlDatabase}?sslmode=verify-full&options=${sqlOptions}`)

    return pgClient.connect()
        .then(() => pgClient.query({
            rowMode: 'array',
            text: 'SELECT * FROM $1 WHERE id = $2',
            values: [sqlTable, id]
        }))
        .then(results => results.rows[0]['views'])
        .finally(() => {pgClient.end()})
}