
// Import the pg libary ....
// This is for the Database conenction query , and creating the users Table .


import { Client } from 'pg'
const client = new Client({
    connectionString : "postgresql://CourseSelling_owner:2XrxO4iGjWqK@ep-bitter-surf-a5pwhlul-pooler.us-east-2.aws.neon.tech/CourseSelling?sslmode=require"
})
async function createUsersTable(){
    await client.connect()
    const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY , 
        username VARCHAR(30) UNIQUE NOT NULL , 
        email VARCHAR (100) UNIQUE NOT NULL , 
        password VARCHAR (18) NOT NULL , 
        created_at TIMESTAMP WITH TIME ZONE  DEFAULT CURRENT_TIMESTAMP
    )
    
    `)
    console.log(result)
}
createUsersTable();