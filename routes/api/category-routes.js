const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


 // find all categories
router.get('/', async (req, res) => {
try{
  const categories = await Category.findAll({
    include: [{model: Product}]
  });
  res.status(200).json(categories);
}catch(err){
  res.status(500).json(err)
}

});


  // find one category by its `id` value
router.get('/:id', async (req, res) => {
  try{
    const category = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create New Category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update Category
router.put('/:id', async (req, res) => {
  try {
    const UpdateCategory = await Category.update(req.body,{
      where: {
        id: req.params.id,
      },
    });
    if (!UpdateCategory[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(UpdateCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category
router.delete('/:id', async (req, res) => {
  try {
    const categoryToDelete = await Category.findOne({
      where: { id: req.params.id }
    });

    if (!categoryToDelete) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }

    await Category.destroy({
      where: { id: req.params.id }
    });

    res.status(200).json(categoryToDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
