const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    res.status(400).send({
        error: 'Need a user id'
    });

});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.send(`Hello from user ${id}'s dashboard`);
});

module.exports = router;