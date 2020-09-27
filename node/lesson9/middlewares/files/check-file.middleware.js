const { DOCS_MIMETYPES, PHOTO_MIMETYPES, MAX_DOC_SIZE, MAX_PHOTO_SIZE } = require('../../configs/constants');
const { ErrorHandler, userErrors } = require('../../error');

module.exports = (req, res, next) => {
    try {

        console.log(req.files);

        if (!req.files) {
            return next()
        }

        const photos = [];
        const docs = [];
        const files = Object.values(req.files);

        for (let i = 0; i < files.length; i++) {
            const { size, name, mimetype } = files[i];

            if (PHOTO_MIMETYPES.includes(mimetype)) {
                if (size > MAX_PHOTO_SIZE) {
                    return next(new ErrorHandler(userErrors.NOT_VALID_PHOTO_SIZE))
                }

                photos.push(files[i])
            } else if (DOCS_MIMETYPES.includes(mimetype)) {
                if (size > MAX_DOC_SIZE) {
                    return next(new ErrorHandler(userErrors.NOT_VALID_DOCS_SIZE))
                }

                docs.push(files[i])
            } else {
                return next(new ErrorHandler(userErrors.NOT_VALID_FILES_SIZE))
            }

            req.photos = photos;
            req.docs = docs;

            next()
        }

    } catch (e) {
       next(e)
    }
};
