const { ErrorHandler, userErrors } = require('../../error');

module.exports = (req, res, next) => {
  try {
    if (req.photos.length > 1) {
        return next(new ErrorHandler(userErrors.NOT_VALID_FILES))
    }

      req.avatar = req.photos[0];
      next();
  }  catch (e) {
      next(e)
  }
};
