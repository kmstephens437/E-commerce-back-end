const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // finding all categories, including associted products

  try {
    const categoryInfo = Category.findAll({
      include: [
        {model: Product}
      ],
    });
    res.status(200).json(categoryInfo);
  } 
  catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', (req, res) => {
  // finding one category by its `id` value while including its associated Products
  try {
    const categoryInfo = Category.findByPk(req.params.id, {
      include: [
        { model: Product}
      ],
    })
    res.status(200).json(categoryInfo);
  }
  catch (err) {
    res.status(500).json(err);
  }


});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
