const { Router } = require('express');
const usersData = require('./usersData');

const router = Router();

router.get('/', (req, res, next) => {
    res.status(400).send({
        error: 'Need a user id'
    });

});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.status(200).send({
        data: usersData[id],
    });
});

module.exports = router;