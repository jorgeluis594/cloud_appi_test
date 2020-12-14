const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

const config = require('../config.js');
const user = require('./components/user/network');
const errors = require('../network_helpers/errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load routes
app.use(user);

// Load Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Handle Error
//app.use(errors);

app.listen(config.api.port, () => {
  console.log(`Api on port ${config.api.port}`);
});
