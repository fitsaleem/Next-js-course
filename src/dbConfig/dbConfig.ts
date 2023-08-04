
// talking to database the mongoose libarary will use
import mongoose from 'mongoose';


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!); // this is typescripe warning! this mean i will takecare of all 
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}