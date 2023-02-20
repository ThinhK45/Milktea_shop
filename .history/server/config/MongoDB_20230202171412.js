import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};