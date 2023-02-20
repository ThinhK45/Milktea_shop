import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../Models/UserModel.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Không có quyền');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Không có quyền');
    }
});
export default protect;
