const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // finding all categories, including associted products

  try {
    const categoriesAll = Category.findAll({
      include: [
        {model: Product}
      ],
    });
    res.status(200).json(categoryAll);
  } 
  catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', (req, res) => {
  // finding one category by its `id` value while including its associated Products
  try {
    const categoryID = Category.findByPk(req.params.id, {
      include: [
        { model: Product}
      ],
    })
    res.status(200).json(categoryID);
  }
  catch (err) {
    res.status(500).json(err);
  }


});

router.post('/', (req, res) => {

  // creating a new category
try {
  const categoryNew = Category.create(req.body);
  res.status(200).json(categoryNew);
}
catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryEdit = Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    if (categoryEdit) {
      res.json(categoryEdit);
    }
    else {
      res.status(404).json({ error: "No Category found"});
    }
  }
  catch (error) {
    res.status(503).json(error);
  }
});

router.delete('/:id', (req, res) => {
  // deleting category by ID
  try {
    const categoryDelete = Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryDelete) {
      res.status(404).json({message:'No trip found'});
      return;
    }
    res.status(200).json(categoryDelete);
  }
  catch (err){
    res.status(500).json(err);
  }
 });

module.exports = router;
