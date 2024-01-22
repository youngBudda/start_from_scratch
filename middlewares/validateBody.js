const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (request, response, next) => {
    const { error } = schema.validate(request.body);
    if (error) {
      const fieldName = error.details[0].path[0];
      next(HttpError(400, `missing required ${fieldName} field`));
    }
    next();
  };
  return func;
};
// const validateBody = (schema) => {
//   const func = (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//       return next(HttpError(400, error.message));
//     }
//     next();
//   };
//   return func;
// };

module.exports = validateBody;
