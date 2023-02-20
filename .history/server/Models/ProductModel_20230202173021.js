import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        reviews: [reviewSchema],
        rating: {
            type: Number,
            require: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            require: true,
            default: 0,
        },
        price: {
            type: Number,
            require: true,
            default: 0,
        },
        countInStock: {
            type: Number,
            require: true,
            default: 0,
        },
    },
    {
        timestamp: true,
    }
);
const User = mongoose.model('User', userSchema);
export default User;
