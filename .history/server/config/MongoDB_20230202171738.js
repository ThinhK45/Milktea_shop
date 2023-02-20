import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
const connectDatabase = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Mongo connected');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDatabase;
