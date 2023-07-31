import mongoose from "mongoose";




const DBConnection = async () => {
   

    const MONGO_URI =`mongodb+srv://ankt1678:ankt1234@file-sharing.m5ffilj.mongodb.net/?retryWrites=true&w=majority`;
     try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;