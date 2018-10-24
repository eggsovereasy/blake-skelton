const path = require('path');
const express = require('express');
const { server } = require('./server');

server.express.use(
  '/',
  express.static(path.join(__dirname, '../speech-recognition/build'))
);

server.start(
  {
    endpoint: '/graphql',
    playground: '/graphql',
    subscriptions: '/graphql'
  },
  () => console.log('Server is running on http://localhost:4000')
);
