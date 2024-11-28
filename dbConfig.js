import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log('DB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectDB;
