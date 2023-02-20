const notFound = (req, res, next) => {
    const error = new Error(`Không tồn tại - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
const errorHandler = (req, res, next, err) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_END === 'production' ? null : err.stack,
    });
};
