const Joi = require('joi');

module.exports = Joi.object().keys({
    model: Joi.string().trim().alphanum().min(3).max(30).required(),
    price: Joi.number().integer().min(0).max(30000).required(),
    year: Joi.number().integer().min(2000).max(2020).required(),
});
