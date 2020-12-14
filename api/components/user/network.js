const express = require('express');

const response = require('../../../network_helpers/response');

const Controller = require('./index');

const router = express.Router();

router.get('/getusers', (req, res, next) => {
  Controller.list()
    .then((users) => {
      response.success(res, users, 200);
    })
    .catch(next);
});

router.get('/getusersById/:userId', (req, res, next) => {
  const { userId } = req.params;
  Controller.get(userId)
    .then((user) => {
      response.success(res, user, 200);
    })
    .catch(next);
});

router.post('/createUsers', (req, res, next) => {
  const user = req.body;
  Controller.create(user)
    .then((createdUser) => {
      response.success(res, createdUser, 201);
    })
    .catch(next);
});

router.put('/updateUsersById/:userId', (req, res, next) => {
  const { userId } = req.params;
  const userData = req.body;

  Controller.update(userId, userData)
    .then((updatedUser) => {
      response.success(res, updatedUser, 200);
    })
    .catch(next);
});

router.delete('/deleteUsersById/:userId', (req, res, next) => {
  const { userId } = req.params;

  Controller.remove(userId)
    .then(() => {
      response.success(res, 'ok', 200);
    })
    .catch(next);
});

module.exports = router;
