const { Router } = require('express');
const usersData = require('./usersData');

const router = Router();

// Get a user's dashboard data
router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    const user = usersData[id];

    if (user) {
        res.status(200).send({
            data: user,
        });
    } else {
        res.status(400).send({
            error: 'User does not exist',
        });
    }
    
});

// Update a user's preferences
router.put('/:id', (req, res, next) => {
    const { id } = req.params;

    const user = usersData[id];

    if (user) {

        // Here we would check that the data object sent
        // by the front end matches the format of our user
        // data in the database before updating

        res.status(200).send({
            message: 'Updated user data',
        });
    } else {
        res.status(400).send({
            error: 'User does not exist',
        });
    }
    
});

module.exports = router;