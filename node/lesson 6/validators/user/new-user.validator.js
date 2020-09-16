const Joi = require('joi');

const {EMAIL} = require('../../configs/regexp.enum');
module.exports = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(58).required(),
    email: Joi.string().regex(EMAIL).max(50).required(),
    password: Joi.string().trim().min(8).required()
})
