const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll()
  .then(data => {
    res.json(data);

  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findAll({
    where: {
      id: req.params["id"]
    }
  })
  .then(data => {
    res.json(data)
  })
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body["category_name"]
  })
  .then(() => {
    res.sendStatus(200)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body["category_name"]

    
  },
  {
    where: {
      id: req.params["id"]
    }
  })
  .then(() => {
    res.sendStatus(200)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params["id"]
    }
  })
  .then(() => {
    res.sendStatus(200)
  })
});

module.exports = router;
