const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//get all products with associated Category and Tag data
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
           model: Product, 
           through: ProductTag, 
        },
    ],
  });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find a single tag by its `id`
router.get('/:id', async (req, res) => { 
  // be sure to include its associated Product data
  const tagID = await Tag.findByPk(req.params.id)
  res.status(200).json(tagID);

}) 

 // create a new tag;
router.post('/', async (req, res) => {
const newTag = await Tag.create(req.body);
res.status(200).json(newTag)
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
const updateTag = await Tag.update(
  {
    tag_name: req.body.tag_name,
  },
  {
    where: {
      id: req.params.id,
    },
  },
);
return res.json(updateTag)

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
 const deleteTag = await Tag.destroy({
  where: {
    id: req.params.id,
  },
 });
return res.json(deleteTag);
});

module.exports = router;
