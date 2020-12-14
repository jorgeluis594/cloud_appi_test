const err = require('../../utils/error');

const users = [
  {
    id: 1,
    name: 'test',
    birthDate: '10-2-1994',
    address: {
      id: 1,
      userId: 1,
      street: 'av test',
      state: 'state test',
      city: 'city test',
      country: 'country test',
      zip: 'zip test',
    },
  },
  {
    id: 2,
    name: 'test',
    birthDate: '10-2-1994',
    address: {
      id: 2,
      userId: 2,
      street: 'av test',
      state: 'state test',
      city: 'city test',
      country: 'country test',
      zip: 'zip test',
    },
  },
  {
    id: 3,
    name: 'test',
    birthDate: '10-2-1994',
    address: {
      id: 3,
      userId: 1,
      street: 'av test',
      state: 'state test',
      city: 'city test',
      country: 'country test',
      zip: 'zip test',
    },
  },
];

function create(data) {
  const { address, ...user } = data;
  return { id: 1, ...user, address: { ...address, id: 1, userId: 1 } };
}
function update(userId, data) {
  const { address, ...userData } = data;
  const user = users.find((item) => item.id === userId);

  return { ...user, ...userData, address: { ...user.address, ...address } };
}

function remove() {
  let count = 0;
  return function () {
    count += 1;
    return {
      calledOnce: count === 1,
      caled: count > 1,
    };
  };
}

function get(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((item) => item.id === Number(id));
    if (user) resolve(user);
    reject(err('User not found', 401));
  });
}

module.exports = {
  list: () => Promise.resolve(users),
  get,
  create,
  update,
  remove: remove(),
};
