const dbConfig = {
  client: "mssql",
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: `USER-PC\\${process.env.DB_SERVER}`,
    database: process.env.DB_DATABASENAME,
    options: {
      encrypt: true,
      instanceName: process.env.DB_INSTANCENAME,
    },
  },
};
module.exports = dbConfig;
