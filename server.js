const express = require('express');

const ProjectRouter = require('./projects/projects-router.js');

const ResourceRouter = require('./resource/resource-router.js');

const TaskRouter = require('./task/task-router.js');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRouter);

server.use('/api/resources', ResourceRouter);

server.use('/api/tasks', TaskRouter);

module.exports = server;