const Notifications = require('../models/notifications.model');
const createError = require('http-errors');

const getNotifications = async (req, res, next) => {
    try {
        const results = await Notifications.find({}, {__v: 0});
        if (results == "") throw createError(404, 'No available notifications.');
        res.status(200).send(results);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
}

module.exports = getNotifications;
