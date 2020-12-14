module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'V3NqAucKHy',
    password: process.env.MYSQL_PASSWORD || '8N9eufA8qn',
    database: process.env.MYSQL_DATABASE || 'V3NqAucKHy',
  },
};

