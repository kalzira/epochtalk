'use strict';

module.exports = function($resource) {
  return $resource('/api/users/:id/', {}, {
    'update': {
      method: 'PUT'
    },
    'register': {
      method: 'POST',
      url: '/api/users/register'
    }
  });
};
