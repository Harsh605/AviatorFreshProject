export const defaultPagination = async (req, res, next) => {
    const { page: apage, limit: alimit } = req.query;
    const page = apage > 0 ? apage : 1;
    const limit = alimit > 0 ? alimit : 10;
    req.query.page = page;
    req.query.limit = limit;
    next();
  };