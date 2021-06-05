const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('index', { title: 'Exercise 1'});
});

module.exports = router;
