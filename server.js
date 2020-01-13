const express = require('express');

const RecipeRouter = require('./recipes/recipes-router.js');

const IngredientsRouter = require('./ingredients/ingredients-router.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);

server.use('/api/ingredients', IngredientsRouter);

module.exports = server;