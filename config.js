module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'safira.123',
    database: process.env.MYSQL_DATABASE || 'cloudappi_test',
  },
};
