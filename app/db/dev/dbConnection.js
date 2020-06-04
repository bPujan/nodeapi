import pool from "./pool";

pool.on('connect',()=> {
    console.log("DB connection established")
});

const createUserTable = () => {
    const userCreateQuery = `CREATE TABLE IF NOT EXISTS users 
    (
        id SERIAL PRIMARY KEY,
        email VARCHAR(100),
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        password VARCHAR(100) NOT NULL,
        created_on DATE NOT NULL
    )`;
    pool.query(userCreateQuery)
        .then((res)=> {
            console.log(res);
            pool.end();
       })
       .catch((err)=> {
           console.log(err);
           pool.end();
       });
};



/**
     * create all tanle
     *  */
    const createAllTables = ()  => {
        createUserTable(); 
       };

   pool.on('remove', ()=> {
       console.log('clent removed');
       process.exit(0);
   });

   export{
       createAllTables,
   };

   require('make-runnable');